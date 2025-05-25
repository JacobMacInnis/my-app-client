import React from 'react';
import './styles/projects.css';
import ProjectBuilder from './project-builder';

export default ({ projectType }) => {
  console.log('Project props', projectType);
  return (<section className='projects' id='projects'>
    <h2 className='projects-header'>{projectType === 'fullStack' ? 'Projects (Made in 2019)' : 'Machine Learning Projects (Made in 2025)'}</h2>
    <div>
      <ProjectBuilder projectType={projectType} />
    </div>
  </section>)
};