import React, { Component } from 'react';
import './App.css';

import LandingPage from './components/landing';



class App extends Component {
  render() {
    return (
      <div className="App">
        <LandingPage />
        <div>
          <h2>Projects</h2>
          <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
        </div>
      </div>
    );
  }
}
export default App;
