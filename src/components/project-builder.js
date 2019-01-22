import React, { Component } from 'react';
import './styles/project-builder.css';
// import Iframe from 'react-iframe';
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
            <img src={project.image} width='330px' alt={`${project.h2} screenshots`}/>
            {/* <Iframe url={project.projectLink}
              className={project.name}
              width='100%'
              height='475px'
              display='initial'
              position='relative'
            /> */}
          </div>
          <a className='project-link'
            href={project.projectLink}>Demo Here</a>
          <div className='github-links'>
            <a href={project.githubLinkClient} className='project-github-link'  target="_blank" rel='noopener noreferrer'><span className='github-span'>CLIENT</span><i className="fab fa-github fa-med icon"></i></a>
            <a href={project.githubLinkServer} className='project-github-link'  target="_blank" rel='noopener noreferrer'><span className='github-span'>SERVER</span><i className="fab fa-github fa-med icon"></i></a>
            </div>
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