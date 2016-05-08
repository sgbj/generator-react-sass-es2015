import React from 'react';
import { Router, Link } from 'react-router';

export default class App extends React.Component {
  
  constructor() {
    super();
    this.state = { showMenu: false }
  }
  
  render() {
    return (
      <div>
        <a className="hamburger material-icons" onClick={() => this.setState({ showMenu: !this.state.showMenu })}>menu</a>
        <nav className={this.state.showMenu ? 'active' : ''}>
          <h1>App</h1>
          <ul>
            <li><Link to="/" activeClassName="active">Home</Link></li>
            <li><Link to="about" activeClassName="active">About</Link></li>
            <li><Link to="contact" activeClassName="active">Contact</Link></li>
          </ul>
        </nav>
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}