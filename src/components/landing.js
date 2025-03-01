import React, { Component } from 'react';
import Typing from 'react-typing-animation';
import Particles from 'react-particles-js';
import { Link, animateScroll as scroll } from 'react-scroll'
import './styles/landing.css';

const typingTexts = [
  "Leading engineering teams to build scalable, real-world solutions.",
  "Designing cloud-native architectures that prioritize resilience and flexibility.",
  "Balancing technical execution with strategic decision-making.",
  "Simplifying complex systems without compromising scalability.",
  "Guiding teams through architectural transitions, from monoliths to microservices.",
  "Managing just-in-time architecture to support product agility.",
  "Mentoring engineers across all levels to improve technical and leadership skills.",
  "Working at the intersection of engineering leadership and AI-driven solutions.",
  // "integrate AI and automation where it makes a measurable impact.",
  "Focus on aligning engineering decisions with business outcomes.",
  "Are you still reading? Here’s what I’m working on now.",
  "Exploring AI applications in software engineering and system optimization.",
  "Refining my approach to distributed architectures and cloud efficiency.",
  "Still mentoring, still learning, and still improving how we build software.",
  "See below for projects, insights, and ways to connect."
];

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
            }
          }}
        />
        <header className='header'>
          <h1 className='name'>JACOB MACINNIS</h1>
          <h2>Tech Leader | Mentor</h2>
          <h2>Cloud & AI Enthusiast</h2>
          <br />

          <Typing className='what-i-do' loop={true} hideCursor={true} speed={60}>
            <Typing.Reset count={1} delay={10} />
            {typingTexts.map((text, index) => (
              <React.Fragment key={index}>
                <Typing.Delay ms={1700} />
                <h2>{text}</h2>
                <Typing.Delay ms={1700} />
                <Typing.Backspace count={text.length} />
                <Typing.Delay ms={1000} />
              </React.Fragment>
            ))}
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