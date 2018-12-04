import React, { Component } from 'react';
import Typing from 'react-typing-animation';
import Particles from 'react-particles-js';
import { Link, animateScroll as scroll } from 'react-scroll'
 
import './styles/landing.css';

class LandingPage extends Component {
  scrollTo() {
    scroll.scrollTo(1000);
  }
  handleSetActive(to) {

  }
  render() {
    return (
      <div className="landing-page" id='home'>
        <Particles
          className='particles'
          style={{
            width: '100%'
          }}
          params={{
            "particles": {
                "number": {
                    "value": 120
                },
                "size": {
                    "value": 4
                },
                "color": {
                  "value": "#0b608e"
                },
                'line_linked': {
                  "color": "#0b608e"
                }
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    },
                    "onclick": {
                      "enable": true,
                      "mode": "push"
                    }
                }
            }}}
        />
        <header className='header'>
          <h1>JACOB MACINNIS</h1>
          <h2>WEB DEVELOPER</h2>
          <br />
          <Typing className='what-i-do' loop={true} hideCursor={true} speed={60}>
            <Typing.Reset count={1} delay={10} />
            <Typing.Delay ms={1700} />
            <h2>I am not your average Software Engineer.</h2>
            <Typing.Delay ms={1700} />
            <Typing.Backspace count={42} />
            <Typing.Delay ms={1000} />
            <h2>My approach to web developent is as a business owner.</h2>
            <Typing.Delay ms={1700} />
            <Typing.Backspace count={53} />
            <Typing.Delay ms={1000} />
            <h2>I build RESTful API Servers.</h2>
            <Typing.Delay ms={1700} />
            <Typing.Backspace count={28} />
            <Typing.Delay ms={1000} />
            <h2>I inspire and lead.</h2>
            <Typing.Delay ms={1700} />
            <Typing.Backspace count={19} />
            <Typing.Delay ms={1000} />
            <h2>I enjoy working with Node.js</h2>
            <Typing.Delay ms={1700} />
            <Typing.Backspace count={28} />
            <Typing.Delay ms={1000} />
            <h2>I think React is awesome!</h2>
            <Typing.Delay ms={1700} />
            <Typing.Backspace count={25} />
            <Typing.Delay ms={1000} />
            <h2>I'm a dog person.</h2>
            <Typing.Delay ms={1700} />
            <Typing.Backspace count={17} />
            <Typing.Delay ms={1000} />
            <h2>I'm a dog and cat person.</h2>
            <Typing.Delay ms={1700} />
            <Typing.Backspace count={25} />
            <Typing.Delay ms={1000} />
            <h2>I'm an animal person.</h2>
            <Typing.Delay ms={1700} />
            <Typing.Backspace count={21} />
            <Typing.Delay ms={1000} />
            <h2>Are you still reading?</h2>
            <Typing.Delay ms={1700} />
            <Typing.Backspace count={22} />
            <Typing.Delay ms={1000} />
            <h2>Ok, Here is what I am up to</h2>
            <Typing.Delay ms={1700} />
            <Typing.Backspace count={27} />
            <Typing.Delay ms={1000} />
            <h2>I am learning GraphQL and React Native</h2>
            <Typing.Delay ms={1700} />
            <Typing.Backspace count={38} />
            <Typing.Delay ms={1000} />
            <h2>I am studying AI programming and algorithms</h2>
            <Typing.Delay ms={1700} />
            <Typing.Backspace count={43} />
            <Typing.Delay ms={1000} />
            <h2>I am exploring the Python language</h2>
            <Typing.Delay ms={1700} />
            <Typing.Backspace count={36} />
            <Typing.Delay ms={1000} />
            <h2>I am building a company called Function Earth</h2>
            <Typing.Delay ms={1700} />
            <Typing.Backspace count={45} />
            <Typing.Delay ms={1000} />
            <h2>See below for some of my projects, and contact info</h2>
            <Typing.Delay ms={1700} />
            <Typing.Backspace count={51} />
            <Typing.Delay ms={1000} />
          </Typing>
        </header>
        <div className='arrow-div'>
          <Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
            <i className="fas fa-chevron-circle-down arrow fa-3x"></i>
          </Link>
        </div>
      </div>
    );
  }
}

export default LandingPage;