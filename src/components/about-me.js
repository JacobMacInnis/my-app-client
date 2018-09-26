import React, { Component } from 'react';
import './about-me.css';
import JacobMacInnisImage from '../images/JacobMacInnis-square.jpg'


class AboutMe extends Component {
  render() {
    return (
      <section className='about-me'>
        <h2 className='about-me-header'>About Me</h2>
            <img className='profile-image' src={JacobMacInnisImage} />
            <ul className='about-me-list'>
              <li>&nbsp;&nbsp;My name is Jacob MacInnis, I'm a full-stack web developer hailing from Massachusetts.  I love building and improving things.</li>
              <li>&nbsp;&nbsp;I enjoy the entire process from envisioning a program to planning and development and finally deploying, maintaining and improving code.</li>  
              <li>&nbsp;&nbsp;I am a highly ambitious self starter with an entrepreneurial background in an ecommerce start-up, as well as revenue generation, early childhood education and psychology.</li>
              <li>&nbsp;&nbsp;I like building with Node.js and React.js!</li>
            </ul> 
      </section>
    );
  }
}

export default AboutMe;