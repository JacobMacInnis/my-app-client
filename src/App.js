import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import './App.css';
import TopNav from './components/top-nav';
import LandingPage from './components/landing';
import AboutMe from './components/about';
import Contact from './components/contact';
import Projects from './components/projects';
import MyStack from './components/my-stack';
import Resume from './components/resume';
import NotFound from './components/not-found';
import initReveal from './reveal';

class App extends Component {
  componentDidMount() {
    this.teardownReveal = initReveal();
  }

  componentWillUnmount() {
    if (this.teardownReveal) this.teardownReveal();
  }

  render() {
    return (
      <div className="App" id="App">
        <div id="page-wrap">
          {/* Outside the Switch so the nav is present on every path, including
              the 404 — it is the way back out. */}
          <Route path="/" component={TopNav} />

          {/* Switch renders the first match only, so the fallback below fires
              exactly when nothing else claimed the path. The landing sections
              share one route, wrapped in a fragment so the DOM is unchanged. */}
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <>
                  <LandingPage />
                  <AboutMe />
                  <Projects projectType={'ml'} />
                  <MyStack />
                  <Contact />
                </>
              )}
            />
            <Route exact path="/resume" component={Resume} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}
export default withRouter(App);
