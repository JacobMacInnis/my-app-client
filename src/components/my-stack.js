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
        <h1 className='tech-stack-header'>TECH STACK</h1>
        <div className='container-1'>
          <div>
            <a href='https://www.javascript.com/' target='_blank'>
              <i className="fab fa-js fa-4x javascript"></i>
            </a>
          </div>
          <div>
            <a href='https://reactjs.org/' target='_blank'>
              <img className='react-icon' src={react} alt='react logo' height='65px' />
            </a>
          </div>
          <div>
            <a href='https://redux.js.org/' target='_blank'>
              <img className='redux-icon' src={redux} alt='redux logo' height='65px' />
            </a>
          </div>
          <div>
            <a href='https://nodejs.org/en/' target='_blank'>
              <img className='node-icon' src={node} alt='node.js logo' height='65px' />
            </a>
          </div>
          <div>
            <a href='https://www.w3schools.com/Html/html5_intro.asp' target='_blank'>
              <img className='html5-icons' src={html5} alt='html5 logo' height='65px' />
            </a>
          </div>
          <div>
            <a href='https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3' target='_blank'>
              <img className='css-icons' src={css3} alt='css3 logo' height='65px' />
            </a>
          </div>
          <div>
            <a href='https://en.wikipedia.org/wiki/Git' target='_blank'>
              <img className='git-icon' src={git} alt='git logo' height='65px' />
            </a>
          </div>
          <div>
            <a href='https://github.com/' target='_blank'>
              <i className="fab fa-github fa-4x"></i>
            </a>
          </div>
          <div>
            <a href='https://jquery.com/' target='_blank'>
              <img className='jquery-icon' src={jQuery} alt= 'jquery logo' height='65px' />
            </a>
          </div>
          <div>
            <a href='https://www.heroku.com/' target='_blank'>
              <img className='heroku-icon' src={heroku} alt='heroku logo' height='65px' />
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default MyStack;