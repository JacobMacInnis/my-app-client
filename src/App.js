import React, { Component } from 'react';
import './App.css';
import SideBar from './components/sidebar';
import TopNav from './components/top-nav';
import LandingPage from './components/landing';
import AboutMe from './components/about';
import Contact from './components/contact';
import Projects from './components/projects';
import Twitter from './components/twitter-section';
import MyStack from './components/my-stack';
import Nav from './components/nav';

class App extends Component {
  render() { 
    return (
      <div className="App">
        <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
        <TopNav />
        <LandingPage />
        {/* <Nav /> */}
        
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
