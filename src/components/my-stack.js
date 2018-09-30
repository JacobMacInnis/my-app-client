import React, { Component } from 'react';
import './my-stack.css';
import jQuery from './../images/tech-icons/jquery.png'
import redux from './../images/tech-icons/redux.png';
import react from './../images/tech-icons/react.png';
import node from './../images/tech-icons/node.png';
import heroku from './../images/tech-icons/heroku.png';
import html5 from './../images/tech-icons/html5.png';
import css3 from './../images/tech-icons/css3.png';
import git from './../images/tech-icons/git.png';
class MyStack extends Component {
  render() {
    return (
      <section className='tech-stack'>
        <h1>TECH STACK</h1>
        <div className='container-1'>
          <div>
            <i className="fab fa-js fa-4x javascript"></i>
          </div>
          <div>
            <img className='react-icon' src={react} alt='react logo' height='50px' />
          </div>
          <div>
            <img className='redux-icon' src={redux} alt='redux logo' height='50px' />
          </div>
          <div>
            <img className='html5-icons' src={html5} alt='html5 logo' height='50px' />
          </div>
          <div>
            <img className='css-icons' src={css3} alt='css3 logo' height='50px' />
          </div>
          <div>
            <img className='node-icon' src={node} alt='node.js logo' height='50px' />
          </div>
          <div>
            <img className='git-icon' src={git} alt='git logo' height='50px' />
          </div>
          <div>
            <i className="fab fa-github fa-3x"></i>
          </div>
          <div>
            <img className='jquery-icon' src={jQuery} alt= 'jquery logo' height='50px' />
          </div>
          <div>
            <img className='heroku-icon' src={heroku} alt='heroku logo' height='50px' />
          </div>
        </div>
      </section>
    );
  }
}

export default MyStack;