import React from 'react';
import './styles/projects.css';
import ProjectBuilder from './project-builder';

export default () => (
  <section className='projects' id='projects'>
    <h2 className='projects-header'>Projects (Made in 2019)</h2>
    <div>
      <ProjectBuilder />
    </div>
  </section>
);