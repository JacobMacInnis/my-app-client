import React, { Component } from 'react';
import './App.css';
import LandingPage from './components/landing';
import AboutMe from './components/about-me';
import Contact from './components/contact';
import Projects from './components/projects';
import MyStack from './components/my-stack';

class App extends Component {
  render() { 
    return (
      <div className="App">
        <LandingPage />
        <AboutMe />
        <Projects />
        <MyStack />
        <Contact />
      </div>
    );
  }
}
export default App;
