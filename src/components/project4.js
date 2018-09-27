import React, { Component } from 'react';
import './project4.css';
import Iframe from 'react-iframe';

class Project4 extends Component {
  render() {
    return (
      <article className='project-4'>
        <h2>Bookmark App</h2>
        <p className='project-4-description'></p>
        <div className='project-4-container'>
          <Iframe url="https://thinkful-ei23.github.io/jacob-bookmarks-app/"
          id="project-4-iframe"
          className="project-4-iframe"
          width='100%'
          height='400px'
          display="initial"
          position="relative"
          />
        </div>
        <a className='project-4-link' href='https://thinkful-ei23.github.io/jacob-bookmarks-app/'>BeachTides.us</a>
        <a href='https://github.com/thinkful-ei23/jacob-bookmarks-app' className='project-4-github-link'  target="_blank" rel='noopener noreferrer'><i className="fab fa-github fa-2x icon"></i></a>
      </article>
    );
  }
}

export default Project4;