import React, { Component } from 'react';
import './nav.css';

class Nav extends Component {
  render() {
    return (
      <nav className='nav'>
        <a class='nav-bar-element' href='#home'>HOME</a>
        <a class='nav-bar-element' href='#projects'>PROJECTS</a>
        <a class='nav-bar-element' href='#about'>ABOUT</a>
        <a class='nav-bar-element' href='#contact'>CONTACT</a>
      </nav>
    );
  }
}

export default Nav;