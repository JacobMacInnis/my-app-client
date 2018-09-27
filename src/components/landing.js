import React, { Component } from 'react';
import Typing from 'react-typing-animation';
import './landing.css';
// import earthUpdsideDown from '../images/earth-upside-down.jpg';


class LandingPage extends Component {
  render() {
    return (
      <div className="landing-page">
        <header className='header'>
          <h1>Hello, I'm Jacob.</h1>
          <Typing className='what-i-do' loop={true} hideCursor={true}>
            <h1>I am a Full-Stack Web Developer.</h1>
            <Typing.Delay ms={1500} />
            <Typing.Backspace count={32} />
            <h1>I build API Servers.</h1>
            <Typing.Delay ms={1500} />
            <Typing.Backspace count={20} />
            <h1>I am a leader.</h1>
            <Typing.Delay ms={1500} />
            <Typing.Backspace count={14} />
            <h1>I love working with Node.js</h1>
            <Typing.Delay ms={1500} />
            <Typing.Backspace count={31} />
            <h1>I think React is awesome!</h1>
            <Typing.Delay ms={1500} />
            <Typing.Backspace count={25} />
            <h1>I'm a dog person.</h1>
            <Typing.Delay ms={1500} />
            <Typing.Backspace count={17} />
            <h1>I'm a dog and cat person.</h1>
            <Typing.Delay ms={1500} />
            <Typing.Backspace count={25} />
            <h1>I'm an animal person.</h1>
            <Typing.Delay ms={1500} />
            <Typing.Backspace count={21} />
          </Typing>
        </header>
      </div>
    );
  }
}

export default LandingPage;