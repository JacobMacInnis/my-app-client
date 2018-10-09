import React, { Component } from 'react';
import './App.css';
import LandingPage from './components/landing';
import PersistantIcons from './components/persistant-icons';
import AboutMe from './components/about-me';
import Contact from './components/contact';
import Projects from './components/projects';
import Twitter from './components/twitter-section';
import MyStack from './components/my-stack';

class App extends Component {
  render() { 
    return (
      <div className="App">
        <LandingPage />
        <PersistantIcons />
        <AboutMe />
        <Projects />
        <MyStack />
        <Twitter />
        <Contact />
      </div>
    );
  }
}
export default App;
