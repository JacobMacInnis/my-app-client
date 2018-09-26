import React, { Component } from 'react';
import './project1.css';
import Iframe from 'react-iframe';

class Project1 extends Component {
  render() {
    return (
      <article className='project-1'>
        <h2>Beach Tides</h2>
        <a href='https://www.beachtides.us'>(BeachTides.us)</a>
        <p>A full-stack mobile first responisive web application built to give users in coastal U.S. current and future tidal predictions. Users search by zipcode or city and state. Users can create accounts using Google OAuth 2.0 to allow storing locations and unlock other personalized themes.</p>
        <div className='project-1-container'>
          <Iframe url="https://www.beachtides.us/"
          id="beachtides"
          className="beachtides"
          width='100%'
          height='500px'
          display="initial"
          position="relative"
          />
        </div>
      </article>
    );
  }
}

export default Project1;

//https:github.com/JacobMacInnis/beach-tides-client