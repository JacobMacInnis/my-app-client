import React, { Component } from 'react';
import './project3.css';
import Iframe from 'react-iframe';

class Project3 extends Component {
  render() {
    return (
      <article className='project-3'>
        <h2 className='project-3-header'>Project 3</h2>
        <p className='project-3-description'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        <div className='project-3-container'>
          <Iframe url="https://www.beachtides.us/"
          id="project-3-iframe"
          className="project-3-iframe"
          width='100%'
          height='400px'
          display="initial"
          position="relative"
          />
        </div>
        <a className='project-3-link' href='https://google.com'>BeachTides.us</a>
        <a href='https://github.com/JacobMacInnis' className='project-3-github-link'  target="_blank" rel='noopener noreferrer'><i className="fab fa-github fa-2x icon"></i></a>
      </article>
    );
  }
}

export default Project3;