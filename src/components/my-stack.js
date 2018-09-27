import React, { Component } from 'react';
import './my-stack.css';
import jQuery from './../images/tech-icons/jquery.png'
import redux from './../images/tech-icons/redux.png';
import react from './../images/tech-icons/react.png';
import node from './../images/tech-icons/node.png';
import heroku from './../images/tech-icons/heroku.png';
import htmlCssIcons from './../images/tech-icons/CSS3_and_HTML5_logos.png';
import git from './../images/tech-icons/git.png';
class MyStack extends Component {
  render() {
    return (
      <section className='tech-stack'>
        <h1>TECH STACK</h1>
        <div>
        <i class="fab fa-js fa-3x javascript"></i>
        <img className='node-icon' src={node} height='40px' />
        <img className='react-icon' src={react} height='45px' />
        <img className='redux-icon' src={redux} height='45px' />
        
        <i class="fab fa-github fa-3x"></i>
        
        <img className='html-css-icons' src={htmlCssIcons} height='45px' />
        <img className='git-icon' src={git} height='45px' />
        <img className='jquery-icon' src={jQuery} height='45px' />
        <img className='heroku-icon' src={heroku} height='45px' />
        </div>
      </section>
    );
  }
}

export default MyStack;