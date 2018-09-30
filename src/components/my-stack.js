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
            <i class="fab fa-js fa-4x javascript"></i>
          </div>
          <div>
            <img className='react-icon' src={react} height='45px' />
          </div>
          <div>
            <img className='redux-icon' src={redux} height='45px' />
          </div>
          <div>
            <img className='html5-icons' src={html5} height='45px' />
          </div>
          <div>
            <img className='css-icons' src={css3} height='45px' />
          </div>
          <div>
            <img className='node-icon' src={node} height='50px' />
          </div>
          <div>
            <img className='git-icon' src={git} height='50px' />
          </div>
          <div>
            <i class="fab fa-github fa-3x"></i>
          </div>
          <div>
            <img className='jquery-icon' src={jQuery} height='45px' />
          </div>
          <div>
            <img className='heroku-icon' src={heroku} height='45px' />
          </div>
        </div>
      </section>
    );
  }
}

export default MyStack;