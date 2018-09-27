import React, { Component } from 'react';
import './App.css';
import LandingPage from './components/landing';
import AboutMe from './components/about-me';
import Contact from './components/contact';
import Projects from './components/projects';

class App extends Component {
  render() { 
    return (
      <div className="App">
        <LandingPage />
        <AboutMe />
        <Projects />
        <Contact />
      </div>
    );
  }
}
export default App;
