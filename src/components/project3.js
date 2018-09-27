import React, { Component } from 'react';
import './project3.css';
import Iframe from 'react-iframe';

class Project3 extends Component {
  render() {
    return (
      <article className='project-3'>
        <h2>Project 3</h2>
        <p className='project-3-description'></p>
        <div className='project-3-container'>
          <Iframe url="https://www.jacobmacinnis.com/"
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