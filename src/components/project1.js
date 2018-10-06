import React, { Component } from 'react';
import './project1.css';
import Iframe from 'react-iframe';
import Project1Tech from './project1-tech';

class Project1 extends Component {
  render() {
    return (
      <article className='project-1'>
        <h2 className='project-1-header'>Beach Tides</h2>
        <p className='project-1-description'>A full-stack mobile first responisive web app built to give users in coastal U.S. tidal predictions. Users search by zipcode or city and state. Users can create accounts using Google OAuth 2.0 to allow storing locations and unlock other personalized themes.</p>
        <div className='project-1-container'>
          <Iframe url="https://www.beachtides.us/"
          id="beachtides"
          className="beachtides"
          width='100%'
          height='400px'
          display="initial"
          position="relative"
          />
        </div>
        <a className='beachtides-link' href='https://www.beachtides.us'>BeachTides.us</a>
        <a href='https://github.com/JacobMacInnis/beach-tides-client' className='project-github-link'  target="_blank" rel='noopener noreferrer'><i className="fab fa-github fa-2x icon"></i></a>
        <Project1Tech />
      </article>
    );
  }
}

export default Project1;