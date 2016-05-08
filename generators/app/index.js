'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the stylish ' + chalk.red('react-sass-es2015') + ' generator!'
    ));

    var prompts = [{
      name: 'appName',
      message: 'What\'s your app\'s name?'
    }, 
    {
      type: 'confirm',
      name: 'createDir',
      message: 'Want me to create the directory for you?',
      default: true
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someOption;

      done();
    }.bind(this));
  },

  writing: function () {
    var dir = this.props.createDir ? this.props.appName : '';
    
    this.log(chalk.red('\nCreating files...\n'));
    
    this.template(
      this.templatePath('package.json'),
      this.destinationPath(dir, 'package.json'),
      this.props
    );
    this.fs.copy(
      this.templatePath('gulpfile.js'),
      this.destinationPath(dir, 'gulpfile.js')
    );
    this.template(
      this.templatePath('app'),
      this.destinationPath(dir, 'app'),
      this.props
    );
  },

  install: function () {
    this.log('\n' + chalk.red('Installing dependencies...') + '\n');
    if (this.props.createDir) {
      process.chdir(this.destinationPath(this.props.appName));
    }
    this.npmInstall('', function () {
      this.log(chalk.red('\nHave fun working on ' + this.props.appName + '! <3'));
    }.bind(this));
  }
});
