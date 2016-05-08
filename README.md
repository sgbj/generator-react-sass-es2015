# generator-react-sass-es2015
> Generate a web app that uses React, Sass, Gulp, Browserify, and ES2015

## Installation

First, install [Yeoman](http://yeoman.io) and generator-react-sass-es2015 using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-react-sass-es2015
```

Then generate your new project:

```bash
yo react-sass-es2015
```

And get up and running with:

```bash
gulp
```

## Result

What you get:

```
├── app/                     # The source code of the application
│   ├── components/          # The react components
|   |   ├── app/             # The application layout
│   │   |   ├── app.js
│   │   ├── home/            # The home page
│   │   |   ├── home.js           
│   │   ├── about/           # The about page
│   │   |   ├── about.js           
│   │   ├── contact/         # The contact page
│   │   |   ├── contact.js           
│   ├── index.html           # The root html file
│   ├── style.scss           # Stylesheet
│   └── main.js              # Renders the app and defines the routes
├── dist/                    # Build/processed files
├── node_modules/            # Libraries/utilities
│── gulpfile.js              # Build script
│── package.json             # Application config and dependencies
```

What it looks like:

![Result](https://raw.githubusercontent.com/sgbj/generator-react-sass-es2015/master/result.png)

## Getting To Know Yeoman

Yeoman has a heart of gold. He&#39;s a person with feelings and opinions, but he&#39;s very easy to work with. If you think he&#39;s too opinionated, he can be easily convinced. Feel free to [learn more about him](http://yeoman.io/).

## License

MIT <3 [sgbj](https://github.com/sgbj)
