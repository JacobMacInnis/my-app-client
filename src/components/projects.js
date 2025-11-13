import React from 'react';
import './styles/projects.css';
import ProjectBuilder from './project-builder';
import { projectsArray } from './../projects-array';
import { mlProjects } from './../mlProjects';

const projectSections = [
  {
    id: 'ai',
    title: 'AI Agents & Automation',
    eyebrow: '2024–2025',
    description: 'LangGraph agents, local copilots, and RAG systems designed to augment engineering teams.',
    dataset: 'ml',
    filter: project => project.tags?.includes('ai') || project.tags?.includes('agents')
  },
  {
    id: 'ml',
    title: 'ML Systems & Data Products',
    eyebrow: 'Applied ML',
    description: 'Computer vision, summarization, and predictive models with pragmatic deployment stories.',
    dataset: 'ml',
    filter: project => project.tags?.includes('ml') && !(project.tags?.includes('ai') || project.tags?.includes('agents'))
  },
  {
    id: 'legacy',
    title: 'Legacy Highlights',
    eyebrow: '2019 Launches',
    description: 'Full-stack and mobile builds that shipped fast, proved value, and still influence how I mentor teams.',
    dataset: 'legacy',
    filter: project => project.tags?.includes('legacy')
  }
];

const Projects = () => (
  <section className='projects' id='projects'>
    <div className='projects-intro'>
      <p className='eyebrow caption'>Project Stories</p>
      <h2 className='projects-header'>Experiments, launches, and systems I still reference.</h2>
      <p className='projects-summary'>
        Each track highlights a different slice of the work—AI prototypes, ML systems, cloud programs, and the legacy apps that started it all.
      </p>
    </div>

    {projectSections.map(section => {
      const source = section.dataset === 'ml' ? mlProjects : projectsArray;
      const list = source.filter(section.filter);
      if (!list.length) return null;
      return (
        <div className='project-section' key={section.id}>
          <div className='project-section-header'>
            <p className='eyebrow caption'>{section.eyebrow}</p>
            <h3>{section.title}</h3>
            <p>{section.description}</p>
          </div>
          <ProjectBuilder projects={list} label={`More ${section.title}`} />
        </div>
      );
    })}
  </section>
);

export default Projects;
