import React, { Component } from 'react';
import './about.css';
import JacobMacInnisImage from '../images/JacobMacInnis-square.jpg'


class AboutMe extends Component {
  render() {
    return (
      <section className='about-me' id='about'>
        <h2 className='about-me-header'>About Me</h2>
        <div className='about-me-content'>
          <img className='profile-image' src={JacobMacInnisImage} alt='Jacob MacInnis'/>
          <ul className='about-me-list'>
            <li>&nbsp;&nbsp;Hi I'm Jacob MacInnis. I'm a full-stack web developer hailing from Massachusetts. I enjoy building client and server applications.</li>
            <li>&nbsp;&nbsp;I enjoy the entire process from envisioning a program to planning and development and finally deploying, maintaining and improving code.</li>  
            <li>&nbsp;&nbsp;I am a highly ambitious self starter with an entrepreneurial background in an ecommerce start-up, as well as revenue generation, early childhood education and psychology.</li>
            <li>&nbsp;&nbsp;I am mostly a self taught developer and I graduated from Thinkfuls Full Stack Engineering Immersion Program in the fall of 2018. I like building in javascript with Node.js and React.js!</li>
            <li>&nbsp;&nbsp;I am currently learning React-Native and GraphQL.  In my spare time I am building a company/website/native app called Function Earth.  Function Earth will be an app that inspires users to be responsible and take care of our planet.  I am learning Polish. </li>
          </ul>
        </div>           
      </section>
    );
  }
}

export default AboutMe;