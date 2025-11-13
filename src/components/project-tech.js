import React from 'react';
import './styles/project-tech.css';

const ProjectTech = ({ techList = [] }) => (
  <section className='tech-list-container'>
    <p className='tech-eyebrow caption'>Stack</p>
    <div className='tech-list'>
      {techList.map((tech, index) => (
        <span className='tech-chip' key={`${tech}-${index}`}>
          {tech}
        </span>
      ))}
    </div>
  </section>
);

export default ProjectTech;
