import React, { Component } from 'react';
import './styles/landing.css';

const heroHighlights = [
  '5+ years in engineering leadership, blending hands-on technical expertise with strategic vision.',
  'From Backend to Frontend and CI/CD, I\'ve led teams end-to-end to ship scalable, resilient solutions.',
  'Building AI Agents and ML systems with PyTorch, TensorFlow, and Scikit-learn, staying hands-on with emerging tech.'
];

class LandingPage extends Component {
  scrollToSection = id => {
    const target = document.getElementById(id);
    if (!target) return;

    const header = document.querySelector('.top-nav');
    const headerOffset = header ? header.offsetHeight + 16 : 0;
    const targetY = Math.max(target.offsetTop - headerOffset, 0);
    const reduced =
      window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if ('scrollBehavior' in document.documentElement.style && !reduced) {
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    } else {
      window.scrollTo(0, targetY);
    }
  };

  render() {
    return (
      <section className="landing-page" id="home">
        <div className="hero-mesh" aria-hidden="true" />
        <div className="hero-grain" aria-hidden="true" />

        <div className="hero-inner">
          <div className="hero-text">
            <p className="hero-kicker" data-reveal>
              Engineering Leadership · Cloud · AI
            </p>
            <h1 data-reveal>Engineering leader designing cloud &amp; AI architectures.</h1>
            <p className="hero-subtitle" data-reveal>
              Hands-on as both a technical leader and top IC helping engineering orgs ship
              reliable, scalable software. Balancing architecture, strategic planning, product
              speed, and pragmatic coaching.
            </p>
            <ul className="hero-highlights" data-reveal>
              {heroHighlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
            <div className="cta-group" data-reveal>
              <a className="btn primary" href="/resume">
                View Resume
              </a>
              <a
                className="btn secondary"
                href="/files/Jacob_MacInnis_Cloud_AI.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download PDF
              </a>
              <a
                className="btn ghost"
                href="mailto:jacobmacinnis7@gmail.com?subject=Let%27s%20talk%20engineering%20leadership"
              >
                Get in Touch
              </a>
            </div>
          </div>

          <div className="hero-visual" data-reveal>
            <div className="stat-card">
              <p className="stat-label">Latest impact</p>
              <p className="stat-value">10k+ stores</p>
              <p className="stat-detail">
                Serverless retail architecture powering 1M+ daily transactions.
              </p>
            </div>
            <div className="stat-card">
              <p className="stat-label">Team focus</p>
              <p className="stat-value">Director of Engineering</p>
              <p className="stat-detail">
                Leading a remote-first full stack org across North America, Europe, and Australia.
              </p>
            </div>
            <div className="stat-card">
              <p className="stat-label">Academia &amp; publications</p>
              <p className="stat-detail">
                Certified in AI/ML by Stanford, Duke, DeepLearning.AI, and Google. Author of 50+
                technical articles.
              </p>
              <p className="stat-detail">
                Working through an MS in Artificial Intelligence at CU Boulder.
              </p>
              <a className="stat-link" href="#about" onClick={() => this.scrollToSection('about')}>
                About &amp; projects
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default LandingPage;
