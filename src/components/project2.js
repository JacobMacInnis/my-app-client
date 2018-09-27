import React, { Component } from 'react';
import './project2.css';
import Iframe from 'react-iframe';

class Project2 extends Component {
  render() {
    return (
      <article className='project-2'>
        <h2 className='project-2-header'>Project 2</h2>
        <p className='project-2-description'></p>
        <div className='project-2-container'>
          <Iframe url="https://www.jacobmacinnis.com/"
          id="project-2-iframe"
          className="project-2-iframe"
          width='100%'
          height='400px'
          display="initial"
          position="relative"
          />
        </div>
        <a className='project-2-link' href='https://google.com'>BeachTides.us</a>
        <a href='https://github.com/JacobMacInnis' className='project-2-github-link'  target="_blank" rel='noopener noreferrer'><i className="fab fa-github fa-2x icon"></i></a>
      </article>
    );
  }
}

export default Project2;