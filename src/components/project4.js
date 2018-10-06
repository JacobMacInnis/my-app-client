import React, { Component } from 'react';
import './project4.css';
import Iframe from 'react-iframe';
import Project1Tech from './project1-tech';

class Project4 extends Component {
  render() {
    return (
      <article className='project-4'>
        <h2 className='project-4-header'>Bookmark App</h2>
        <p className='project-4-description'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
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
        <a href='https://github.com/thinkful-ei23/jacob-bookmarks-app' className='project-github-link'  target="_blank" rel='noopener noreferrer'><i className="fab fa-github fa-2x icon"></i></a>
        <Project1Tech />
      </article>
    );
  }
}

export default Project4;