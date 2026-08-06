import React, { Component } from 'react';
import './styles/landing.css';
import Avatar from './../images/jacob-avatar.jpg';
import { techGroups } from './my-stack';

const heroStats = [
  { value: '10k+', label: 'stores live', detail: 'North America, Europe, Australia' },
  { value: '1M+', label: 'daily transactions', detail: 'Serverless retail architecture' },
  { value: '99.99%', label: 'uptime', detail: '400+ cloud functions on AWS + GCP' },
  { value: '12+', label: 'engineers led', detail: 'Across 3 remote-first teams' }
];

const heroHighlights = [
  'Hands-on leadership, still reviewing PRs and prototyping architecture.',
  'Backend, frontend, and CI/CD, end to end.',
  'Building AI agents and ML systems with PyTorch, LangGraph, and MCP.'
];

// A representative slice of the stack, drawn from the same source as the
// Tech Stack section so the two never drift apart.
const marqueeItems = techGroups
  .flatMap(group => group.items)
  .filter(item => item.img && typeof item.img === 'string' && !item.img.startsWith('http'))
  .slice(0, 18);

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.heroRef = React.createRef();
    this.rafId = null;
  }

  componentDidMount() {
    // matchMedia is absent in jsdom and older embedded webviews; treat a
    // missing implementation as "no spotlight" rather than throwing.
    const matches = query => Boolean(window.matchMedia && window.matchMedia(query).matches);
    if (!matches('(prefers-reduced-motion: reduce)') && matches('(hover: hover)')) {
      window.addEventListener('pointermove', this.handlePointerMove, { passive: true });
    }
  }

  componentWillUnmount() {
    window.removeEventListener('pointermove', this.handlePointerMove);
    if (this.rafId) cancelAnimationFrame(this.rafId);
  }

  // Spotlight follows the cursor across the hero. Coalesced into one frame so
  // a fast mouse cannot outpace the paint.
  handlePointerMove = event => {
    this.lastPointer = { x: event.clientX, y: event.clientY };
    if (this.rafId) return;
    this.rafId = window.requestAnimationFrame(() => {
      this.rafId = null;
      const hero = this.heroRef.current;
      if (!hero || !this.lastPointer) return;
      const rect = hero.getBoundingClientRect();
      if (rect.bottom < 0) return;
      hero.style.setProperty('--mx', `${this.lastPointer.x - rect.left}px`);
      hero.style.setProperty('--my', `${this.lastPointer.y - rect.top}px`);
    });
  };

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
      <section className="landing-page" id="home" ref={this.heroRef}>
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-aurora" aria-hidden="true">
          <span className="aurora-blob a" />
          <span className="aurora-blob b" />
          <span className="aurora-blob c" />
        </div>
        <div className="hero-spotlight" aria-hidden="true" />
        <div className="hero-grain" aria-hidden="true" />

        <div className="hero-inner">
          <p className="hero-kicker" data-reveal>
            <img className="hero-avatar" src={Avatar} alt="Jacob MacInnis" />
            Director of Engineering · Cloud &amp; AI
            <span className="hero-kicker-sep" aria-hidden="true" />
            <span className="hero-kicker-muted">Rhode Island · Remote</span>
          </p>

          <h1 data-reveal>
            Engineering leader designing <em>cloud &amp; AI</em> architectures.
          </h1>

          <div className="hero-columns">
            <div className="hero-lede" data-reveal>
              <p className="hero-subtitle">
                Hands-on as both a technical leader and top IC, helping engineering orgs ship
                reliable, scalable software.
              </p>
              <div className="cta-group">
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
                  Get in touch
                </a>
              </div>
            </div>

            <ul className="hero-highlights" data-reveal>
              {heroHighlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hero-stats" data-reveal>
          {heroStats.map(stat => (
            <div className="hero-stat" key={stat.label}>
              <p className="hero-stat-value">{stat.value}</p>
              <p className="hero-stat-label">{stat.label}</p>
              <p className="hero-stat-detail">{stat.detail}</p>
            </div>
          ))}
        </div>

        <div className="hero-marquee" aria-hidden="true">
          <div className="hero-marquee-track">
            {[0, 1].map(copy => (
              <div className="hero-marquee-group" key={copy}>
                {marqueeItems.map(item => (
                  <span className="hero-marquee-item" key={`${copy}-${item.name}`}>
                    <img src={item.img} alt="" loading="lazy" />
                    {item.name}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default LandingPage;
