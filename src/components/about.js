import React, { Component } from 'react';
import './styles/about.css';
import JacobMacInnisImage from '../images/JacobMacInnis-square.jpg'


class AboutMe extends Component {
  render() {
    return (
      <section className='about-me' id='about'>
        <h2 className='about-me-header'>About Me</h2>
        <div className='about-me-content'>
          <img className='profile-image' src={JacobMacInnisImage} alt='Jacob MacInnis'/>
          <ul className='about-me-list'>
            <li>&nbsp;&nbsp;Hi, I'm a full-stack web developer hailing from Massachusetts. I enjoy building client and server applications.</li>
            <li>&nbsp;&nbsp;I am mostly a self-taught developer, and I graduated from <a href='https://www.thinkful.com/bootcamp/web-development/full-time/' target="_blank" rel='noopener noreferrer' className='thinkful-link'>Thinkful</a>, A Full Stack Engineering Immersion School.</li> 
            <li>I program in JavaScript and I am comfortable with NodeJS and ReactJs.</li>
            <li>I am looking to work in a company as a Full Stack, Front-End or Back-End Engineer.  I would like to work with small to medium size teams of 3 to 10 great developers.  The perfect team would be a mix of junior, middle and senior level engineers.  I am Looking for teams working in an agile environment.</li>
            <li>&nbsp;&nbsp;I am a highly ambitious self-starter with an entrepreneurial background in an e-commerce start-up, as well as revenue generation, early childhood education, and psychology.</li>
            <li>&nbsp;&nbsp;I am currently learning React-Native and GraphQL.</li>
            <li>&nbsp;&nbsp;In my spare time, I am building a project called Function Earth.  Function Earth is a native app that inspires users to be responsible and take care of our planet.</li>
          </ul>
        </div>           
      </section>
    );
  }
}

export default AboutMe;