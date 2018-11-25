import React, { Component } from 'react';
import Typing from 'react-typing-animation';
import Particles from 'react-particles-js';
import './styles/landing.css';

class LandingPage extends Component {
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
                    "value": 50
                },
                "size": {
                    "value": 3
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
          <h1>Jacob MacInnis</h1>
          <h2>Web Developer</h2>
          <br />
          <Typing className='what-i-do' loop={true} hideCursor={true} speed={40}>
            <Typing.Delay ms={1700} />
            <h2>I am not your average Software Engineer.</h2>
            <Typing.Delay ms={1500} />
            <Typing.Backspace count={42} />
            <Typing.Delay ms={700} />
            <h2>My approach to web developent is as a business owner.</h2>
            <Typing.Delay ms={1500} />
            <Typing.Backspace count={53} />
            <Typing.Delay ms={700} />
            <h2>I build RESTful API Servers.</h2>
            <Typing.Delay ms={1500} />
            <Typing.Backspace count={28} />
            <Typing.Delay ms={700} />
            <h2>I inspire and lead.</h2>
            <Typing.Delay ms={1500} />
            <Typing.Backspace count={19} />
            <Typing.Delay ms={700} />
            <h2>I enjoy working with Node.js</h2>
            <Typing.Delay ms={1500} />
            <Typing.Backspace count={28} />
            <Typing.Delay ms={700} />
            <h2>I think React is awesome!</h2>
            <Typing.Delay ms={1500} />
            <Typing.Backspace count={25} />
            <Typing.Delay ms={700} />
            <h2>I'm a dog person.</h2>
            <Typing.Delay ms={1500} />
            <Typing.Backspace count={17} />
            <Typing.Delay ms={700} />
            <h2>I'm a dog and cat person.</h2>
            <Typing.Delay ms={1500} />
            <Typing.Backspace count={25} />
            <Typing.Delay ms={700} />
            <h2>I'm an animal person.</h2>
            <Typing.Delay ms={1500} />
            <Typing.Backspace count={21} />
            <Typing.Delay ms={700} />
            <h2>Are you still reading?</h2>
            <Typing.Delay ms={1500} />
            <Typing.Backspace count={22} />
            <Typing.Delay ms={700} />
            <h2>Ok, Here is what I am up to</h2>
            <Typing.Delay ms={1500} />
            <Typing.Backspace count={27} />
            <Typing.Delay ms={700} />
            <h2>I am learning GraphQL and React Native</h2>
            <Typing.Delay ms={1500} />
            <Typing.Backspace count={38} />
            <Typing.Delay ms={700} />
            <h2>I am studying AI programming and algorithms</h2>
            <Typing.Delay ms={1500} />
            <Typing.Backspace count={43} />
            <Typing.Delay ms={700} />
            <h2>I have exploring the Python language</h2>
            <Typing.Delay ms={1500} />
            <Typing.Backspace count={36} />
            <Typing.Delay ms={700} />
            <h2>I am building a company called Function Earth</h2>
            <Typing.Delay ms={1500} />
            <Typing.Backspace count={45} />
            <Typing.Delay ms={700} />
            <h2>See below for some of my projects, and contact info</h2>
            <Typing.Delay ms={1500} />
            <Typing.Backspace count={51} />
            <Typing.Delay ms={700} />
          </Typing>
        </header>
      </div>
    );
  }
}

export default LandingPage;