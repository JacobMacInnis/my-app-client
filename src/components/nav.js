import React, { Component } from 'react';
import Home from './landing';
import AboutMe from './about';
import Projects from './projects';
import Contact from './contact';
import './nav.css';

class Nav extends Component {
  render() {
    return (
      <nav>
        <a href={Projects}>Projects</a>
      </nav>
    );
  }
}

export default Nav;