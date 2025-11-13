import React, { useEffect, useMemo, useState } from 'react';
import './styles/project-builder.css';
import ProjectTech from './project-tech';

const tagLabels = {
  ml: 'AI / ML',
  legacy: 'Full Stack',
  cloud: 'Cloud & Platforms',
  mobile: 'Mobile UX',
  ai: 'AI Systems',
  cv: 'Computer Vision',
  nlp: 'NLP',
  agents: 'Agentic'
};

const ProjectBuilder = ({ projects = [], label = 'More Projects' }) => {
  const [activeId, setActiveId] = useState(projects[0]?.name ?? null);

  useEffect(() => {
    setActiveId(projects[0]?.name ?? null);
  }, [projects]);

  const activeProject = useMemo(
    () => projects.find(project => project.name === activeId) || projects[0],
    [projects, activeId]
  );

  if (!projects.length) {
    return <p className='projects-empty'>More case studies coming soon in this track.</p>;
  }

  const badge = (() => {
    if (!activeProject) return 'Project';
    const primaryTag = activeProject.tags?.[0] || activeProject.source;
    return tagLabels[primaryTag] || (primaryTag ? primaryTag.replace(/^\w/, c => c.toUpperCase()) : 'Project');
  })();

  return (
    <div className='project-layout'>
      {activeProject && (
        <div className='project-feature'>
          <div className='feature-media'>
            <img src={activeProject.image} alt={`${activeProject.h2} hero`} loading="lazy" />
            <div className='feature-media-overlay' />
          </div>
          <div className='feature-body'>
            <span className='project-tag'>{badge}</span>
            <h3>{activeProject.h2}</h3>
            <p>{activeProject.description}</p>

            <div className='project-links'>
              {activeProject.projectLink && (
                <a className='project-link primary' href={activeProject.projectLink} target="_blank" rel="noopener noreferrer">
                  {activeProject.linkText || 'View project'}
                </a>
              )}
              {activeProject.github ? (
                <a className='project-link secondary' href={activeProject.github} target="_blank" rel='noopener noreferrer'>
                  Github
                </a>
              ) : (
                <>
                  {activeProject.githubLinkClient && (
                    <a className='project-link secondary' href={activeProject.githubLinkClient} target="_blank" rel='noopener noreferrer'>
                      Client Repo
                    </a>
                  )}
                  {activeProject.githubLinkServer && (
                    <a className='project-link secondary' href={activeProject.githubLinkServer} target="_blank" rel='noopener noreferrer'>
                      Server Repo
                    </a>
                  )}
                </>
              )}
            </div>

          </div>

          <ProjectTech techList={activeProject.techList} />
        </div>
      )}

      <div className='project-list'>
        <p className='project-list-label'>{label}</p>
        {projects.map(project => (
          <button
            key={project.name}
            className={`project-list-item ${project.name === activeId ? 'active' : ''}`}
            data-label={project.h2}
            onClick={() => setActiveId(project.name)}
          >
            <div>
              <span className='project-list-tag'>
                {project.tags?.[0] ? (tagLabels[project.tags[0]] || project.tags[0].toUpperCase()) : 'Project'}
              </span>
              <h4>{project.h2}</h4>
              <p>{project.description}</p>
            </div>
            <span className='project-list-toggle'>{project.name === activeId ? 'Current' : 'View'}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProjectBuilder;
