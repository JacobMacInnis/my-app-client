import React, { Component } from 'react';
import scrollToComponent from 'react-scroll-to-component';
import Home from './landing';
import AboutMe from './about';
import Projects from './projects';
import Contact from './contact';
import './nav.css';

class Nav extends Component {
  comoponentDidMount() {
    scrollToComponent(this.blue)
  }
  render() {
    return (
      <nav>
        <a href={Projects}>Projects</a>
      </nav>
    );
  }
}

export default Nav;