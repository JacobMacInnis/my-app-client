import React, { Component } from 'react';
import Typing from 'react-typing-animation';
import './landing.css';

class LandingPage extends Component {
  render() {
    return (
      <div className="landing-page">
        <header className='header'>
          <h1>Jacob MacInnis</h1>
          <Typing className='what-i-do' loop={true} hideCursor={true} speed={40}>
            <h1>I am a not your average Software Engineer.</h1>
            <Typing.Delay ms={1500} />
            <Typing.Backspace count={42} />
            <h1>My approach to web developent is as a business owner.</h1>
            <Typing.Delay ms={1500} />
            <Typing.Backspace count={53} />
            <h1>I build RESTful API Servers.</h1>
            <Typing.Delay ms={1500} />
            <Typing.Backspace count={28} />
            <h1>I inspire and lead.</h1>
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