import React, { Component } from 'react';
import Typing from 'react-typing-animation';
import './landing.css';
import earthUpdsideDown from '../images/earth-upside-down.jpg';


class LandingPage extends Component {
  render() {
    return (
      <div className="landing-page">
        <img className='earth-landing-image' src={earthUpdsideDown} />
        <header className='header'>
          <h1>Hello, I'm Jacob.</h1>
          <Typing className='what-i-do' loop={true} hide cursor={true}>
            <h1>I am a Full-Stack Web Developer</h1>
            <Typing.Delay ms={1500} />
            <Typing.Backspace count={31} />
            <h1>I build API servers</h1>
            <Typing.Delay ms={1500} />
            <Typing.Backspace count={31} />
            <h1>I am a leader</h1>
            <Typing.Delay ms={1500} />
            <Typing.Backspace count={31} />
          </Typing>
        </header>
      </div>
    );
  }
}

export default LandingPage;