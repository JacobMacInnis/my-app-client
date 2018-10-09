import React, { Component } from 'react';
import './project-builder.css';
import Iframe from 'react-iframe';
import ProjectTech from './project-tech';

class ProjectBuilder extends Component {
  render() {
    const projectsArray = [{
      name: 'beachtides',
      h2: 'Beach Tides',
      description: 'A Full-Stack mobile first responisive web app built to give users in coastal U.S. tidal predictions. Users search by zipcode or city and state. Users can create accounts using Google OAuth 2.0 to allow storing locations and unlock other personalized themes.',
      projectLink: 'https://www.beachtides.us',
      linkText: 'BeachTides.us',
      githubLink: 'https://github.com/JacobMacInnis/beach-tides-client',
      techList: ['Node', 'React', 'Redux', 'JavaScript', 'Express', 'MongoDB', 'Mongoose', 'mLab', 'HTML5', 'CSS3', 'Google-OAuth-2.0', 'Passport-JWT', 'Mocha', 'Chai', 'Enzyme', 'Travis-CI', 'Heroku']
    }, {
      name: 'functionearth',
      h2: 'Function Earth',
      description: 'A Full-Stack fully responsive web app designed to encourage users to pick up recylclable items log how much they have done',
      projectLink: 'https://www.functionearth.com',
      linkText: 'FunctionEarth.com',
      githubLink: 'https://github.com/JacobMacInnis/client-function-earth',
      techList: ['Node', 'React', 'Redux', 'JavaScript', 'Express', 'MongoDB', 'Mongoose', 'mLab', 'HTML5', 'CSS3', 'Google-OAuth-2.0', 'Passport-JWT', 'Mocha', 'Chai', 'Enzyme', 'Travis-CI', 'Heroku']
    }];
    const projectsComponents = projectsArray.map((project, index) => {
      return (
        <article className='project'>
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