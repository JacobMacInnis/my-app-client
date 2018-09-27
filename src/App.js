import React, { Component } from 'react';
import './App.css';
import code from './images/code.png';
import LandingPage from './components/landing';
import AboutMe from './components/about-me';
import Contact from './components/contact';
import Projects from './components/projects';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstRender: false
    };
  };
  componentDidMount() {
    this.setState({
      firstRender: true
    });
  };
  componentWillUnmount() {
    this.setState({
      firstRender: false
    });
  };
  render() { 
    if (this.state.firstRender) {
      return (
      <div className="App">
        <div className='onLoadImageFade'></div>
        <LandingPage />
        <AboutMe />
        <Projects />
        <Contact />
      </div>
      )
    } else {
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
}
export default App;
