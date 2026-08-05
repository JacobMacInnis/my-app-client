import React from 'react';
import './styles/about.css';
import JacobMacInnisImage from '../images/jacob-headshot.jpg';

const highlightCards = [
  {
    title: 'Leadership',
    description:
      'Hands-on engineering leader focused on architecture, delivery, and coaching. Led global retail platforms across AWS + GCP and partner with product teams to unblock execution.',
    bullets: [
      'Architect scalable cloud systems and mentor distributed teams.',
      'Optimize CI/CD, incident response, and technical decision-making.',
      'Publish 50+ technical articles to share playbooks with the community.'
    ]
  },
  {
    title: 'Software Engineering Craft',
    description:
      'Still coding daily—reviewing PRs, pairing with teams, and prototyping reference implementations to keep architecture grounded.',
    bullets: [
      'Hands-on with TypeScript, Node.js, React, FastAPI, and serverless patterns.',
      'Builds guardrails for testing, observability, and secure-by-default pipelines.',
      'Translates executive goals into actionable backlogs and technical OKRs.'
    ]
  },
  {
    title: 'AI / ML Practice',
    description:
      'Applied AI across agents, RAG, NLP, and computer vision—shipped end to end, not left in notebooks.',
    bullets: [
      'Built R2AI (LangGraph refactoring agent) and Agent Cortex (local multi-tool assistant).',
      'Explored MCP orchestration, comparing ReAct agents against deterministic tool pipelines.',
      'Shipped RAG APIs, Summit Mind summarization, and the Folia Vision CV pipeline on Cloud Run.',
      'Tooling: LangChain, LangGraph, MCP, TensorFlow, PyTorch, Hugging Face, FastAPI, Docker, GCP.'
    ]
  },
  {
    title: 'Education & Credentials',
    description:
      'Continuous learning keeps my leadership pragmatic and deeply technical.',
    bullets: [
      'MS in Artificial Intelligence, University of Colorado Boulder (in progress).',
      'Stanford Machine Learning Specialization.',
      'DeepLearning.AI Machine Learning in Production.',
      'Duke Managing Machine Learning Projects.',
      'Google Cloud ML, plus 1,600 hours of Thinkful full-stack training.'
    ]
  }
];

export default () => (
  <section className='about-me' id='about'>
    <div className='about-hero' data-reveal>
      <div className='about-text'>
        <h2 className='about-me-header'>Engineering leadership rooted in shipping, mentoring, and modernizing.</h2>
        <p className='about-summary'>
          I bridge executive priorities with hands-on architecture. From guiding global deployments to building AI side projects,
          I stay close to the code so teams can scale with confidence.
        </p>
      </div>
      <div className='about-image-wrapper'>
        <img className='profile-image' src={JacobMacInnisImage} alt='Jacob MacInnis' />
        <p className='profile-caption'>Director of Engineering · Cloud &amp; AI · Rhode Island / Remote</p>
      </div>
    </div>

    <div className='about-grid'>
      {highlightCards.map(card => (
        <article key={card.title} className='about-card' data-reveal>
          <h3>{card.title}</h3>
          <p>{card.description}</p>
          <ul>
            {card.bullets.map((bullet, index) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  </section>
);
