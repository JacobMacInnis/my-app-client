import React from 'react';
import './styles/about.css';
import JacobMacInnisImage from '../images/JacobMacInnis-square.jpg';

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
      'Experimenting with applied AI—agents, RAG, and ML systems—to stay sharp while steering enterprise initiatives.',
    bullets: [
      'Built R2AI (LangGraph refactoring agent) and Agent Cortex (local AI assistant).',
      'Shipped RAG APIs, Summit Mind summaries, Agricultural Leaf Vision CV pipeline.',
      'Tooling: LangChain, LangGraph, TensorFlow, PyTorch, FastAPI, Docker, GCP.'
    ]
  },
  {
    title: 'Certifications & Credentials',
    description:
      'Continuous learning keeps my leadership pragmatic and deeply technical.',
    bullets: [
      'Stanford Machine Learning Specialization.',
      'DeepLearning.AI Machine Learning in Production.',
      'Duke Managing Machine Learning Projects.',
      'Google Cloud ML, plus 1,600 hours of Thinkful full-stack training.'
    ]
  }
];

export default () => (
  <section className='about-me' id='about'>
    <div className='about-hero'>
      <div className='about-text'>
        <p className='eyebrow caption'>About Jacob</p>
        <h2 className='about-me-header'>Engineering leadership rooted in shipping, mentoring, and modernizing.</h2>
        <p className='about-summary'>
          I bridge executive priorities with hands-on architecture. From guiding global deployments to building AI side projects,
          I stay close to the code so teams can scale with confidence.
        </p>
      </div>
      <div className='about-image-wrapper'>
        <img className='profile-image' src={JacobMacInnisImage} alt='Jacob MacInnis' />
        <p className='profile-caption'>Director of Engineering · Cloud & AI · Remote/Boston</p>
      </div>
    </div>

    <div className='about-grid'>
      {highlightCards.map(card => (
        <article key={card.title} className='about-card'>
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
