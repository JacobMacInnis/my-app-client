import React, { Component } from 'react';
import './projects.css';
import ProjectBuilder from './project-builder';

class Projects extends Component {
  render() {
    return (
      <section className='projects'>
        <h2 className='projects-header'>Current Projects</h2>
        <div>
          <ProjectBuilder />
        </div>
      </section>
    );
  }
}

export default Projects;