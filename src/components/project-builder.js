import React, { Component } from 'react';
import './project-builder.css';
import Iframe from 'react-iframe';
import ProjectTech from './project-tech';
import { projectsArray } from './../projects-array';

class ProjectBuilder extends Component {
  render() {
    
    const projectsComponents = projectsArray.map((project, index) => {
      return (
        <article id={`project-builder-${index}`}className='project' key={index}>
          <h2 className='project-header'>{project.h2}</h2>
          <p className='project-description'>{project.description}</p>
          <div className='project-container'>
            <Iframe url={project.projectLink}
              className={project.name}
              width='100%'
              height='475px'
              display='initial'
              position='relative'
            />
          </div>
          <a className='project-link'
            href={project.projectLink}>{project.linkText}</a>
          <a href={project.githubLink} className='project-github-link'  target="_blank" rel='noopener noreferrer'><i className="fab fa-github fa-2x icon"></i></a>
          <ProjectTech techList={project.techList}/>
        </article>
      )
    })
    return (
      <div className='projects-container'>
        {projectsComponents}
      </div>
    );
  }
}

export default ProjectBuilder;