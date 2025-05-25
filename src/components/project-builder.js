import React, { Component } from 'react';
import './styles/project-builder.css';
// import Iframe from 'react-iframe';
import ProjectTech from './project-tech';
import { projectsArray } from './../projects-array';
import { mlProjects } from './../mlProjects';

class ProjectBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectType: this.props.projectType
    };
  }


  render() {

    const projects = this.state.projectType === 'fullStack' ? projectsArray : mlProjects;
    const projectsComponents = projects.map((project, index) => {
      return (
        <article id={`project-builder-${index}`} className='project' key={index}>
          <h2 className='project-header'>{project.h2}</h2>
          <p className='project-description'>{project.description}</p>
          <div className='project-container'>
            <img src={project.image} style={{ 'max-height': '400px' }} width='330px' alt={`${project.h2} screenshots`} />
            {/* <Iframe url={project.projectLink}
              className={project.name}
              width='100%'
              height='475px'
              display='initial'
              position='relative'
            /> */}
          </div>
          {project.projectLink &&
            <div className='project-link-container'>
              <a className='project-link'
                href={project.projectLink}>{project.linkText}</a>
            </div>
          }
          {project.github ? (
            <div className='github-links'>
              <a href={project.githubLinkClient} className='project-github-link' target="_blank" rel='noopener noreferrer'><span className='github-span'>Github Project </span><i className="fab fa-github fa-med icon"></i></a>
            </div>)
            :
            (<div className='github-links'>
              <a href={project.githubLinkClient} className='project-github-link' target="_blank" rel='noopener noreferrer'><span className='github-span'>CLIENT</span><i className="fab fa-github fa-med icon"></i></a>
              <a href={project.githubLinkServer} className='project-github-link' target="_blank" rel='noopener noreferrer'><span className='github-span'>SERVER</span><i className="fab fa-github fa-med icon"></i></a>
            </div>)}
          <ProjectTech techList={project.techList} />
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