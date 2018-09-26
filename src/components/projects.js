import React, { Component } from 'react';
import './projects.css';
import Project1 from './project1';
import Project2 from './project2';
import Project3 from './project3';
import Project4 from './project4';

class Projects extends Component {
  render() {
    return (
      <section className='projects'>
        <Project1 />
        <Project2 />
        <Project3 />
        <Project4 />
      </section>
    );
  }
}

export default Projects;