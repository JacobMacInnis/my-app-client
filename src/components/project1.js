import React, { Component } from 'react';
import './project1.css';
import WebView from 'react-electron-web-view';

class Project1 extends Component {
  render() {
    return (
      <article className='project-1'>
        <h2>Project 1</h2>
        <WebView id="beachtides" src="https://www.google.com" />
      </article>
    );
  }
}

export default Project1;

// https://www.beachtides.us/