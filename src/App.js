import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import './App.css';
import TopNav from './components/top-nav';
import LandingPage from './components/landing';
import AboutMe from './components/about';
import Contact from './components/contact';
import Projects from './components/projects';
import MyStack from './components/my-stack';
import Resume from './components/resume';

class App extends Component {
  render() {
    return (
      <div className="App" id="App">
        <div id="page-wrap">
          <Route exact path="/" component={TopNav} />
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/" component={AboutMe} />
          <Route
            exact
            path="/"
            render={() => <Projects projectType={'ml'} />}
          />
          <Route exact path="/" component={MyStack} />
          <Route exact path="/" component={Contact} />
          <Route exact path="/resume" component={Resume} />
        </div>
      </div>
    );
  }
}
export default withRouter(App);
