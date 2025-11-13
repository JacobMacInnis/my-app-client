import React, { Component } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import './styles/landing.css';

const heroHighlights = [
  '5+ years in engineering leadership, blending hands-on technical expertise with strategic vision to drive impactful outcomes.',
  'From Backend to Frontend, CI/CD, and everything in between. Proven track record of building and leading teams that deliver scalable, resilient solutions.',
  'Building AI (R2AI, Agent Cortex, RAG API) and ML projects (PyTorch, TensorFlow, Scikit-learn) staying hands-on with emerging tech.'
];

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.heroRef = React.createRef();
    this.lastKnownScrollY = 0;
    this.rafId = null;
  }

  scrollToSection = (id) => {
    const target = document.getElementById(id);
    if (!target) return;

    const header = document.querySelector('.top-nav');
    const headerOffset = header ? header.offsetHeight + 16 : 0;
    const targetY = target.offsetTop - headerOffset;
    const supportsSmooth = 'scrollBehavior' in document.documentElement.style;

    if (supportsSmooth) {
      window.scrollTo({ top: Math.max(targetY, 0), behavior: 'smooth' });
    } else {
      window.scrollTo(0, Math.max(targetY, 0));
    }
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, { passive: true });
    this.updateParallax();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
    }
  }

  handleScroll = () => {
    this.lastKnownScrollY = window.scrollY || 0;
    if (this.rafId) {
      return;
    }
    this.rafId = window.requestAnimationFrame(this.updateParallax);
  };

  particlesInit = async (main) => {
    await loadFull(main);
  };

  particlesLoaded = () => { };

  updateParallax = () => {
    if (this.heroRef.current) {
      const offset = Math.min(this.lastKnownScrollY * 0.05, 20);
      this.heroRef.current.style.transform = `translateY(${offset}px)`;
    }
    this.rafId = null;
  };

  render() {
    return (
      <section className="landing-page" id="home">
        <Particles
          className="particles"
          id="tsparticles"
          init={this.particlesInit}
          loaded={this.particlesLoaded}
          options={{
            particles: {
              number: {
                value: 45,
                density: { enable: true, area: 800 }
              },
              size: { value: 3 },
              opacity: { value: 0.3 },
              move: { enable: true, speed: 0.8 },
              color: { value: '#8DF0FF' },
              links: {
                enable: true,
                distance: 150,
                color: '#74C4FF',
                opacity: 0.25,
                width: 1
              }
            },
            interactivity: {
              events: {
                onHover: { enable: true, mode: 'grab' },
                onClick: { enable: true, mode: 'push' }
              },
              modes: {
                grab: { distance: 140, links: { opacity: 0.45 } },
                push: { quantity: 4 }
              }
            },
            detectRetina: true
          }}
        />
        <div className="hero-overlay" />

        <div className="hero-inner" ref={this.heroRef}>
          <div className="hero-text">
            <p className="eyebrow">Engineering Leadership · Cloud · AI</p>
            <p className="hero-name">Jacob MacInnis</p>
            <h1>Engineering Leader designing cloud & AI architectures.</h1>
            <p className="hero-subtitle">
              I provide hands-on technical leadership while contributing as a top IC, helping engineering orgs ship reliable, scalable software.
              Balancing architecture, strategic planning, product speed, and pragmatic coaching to guide high-performing teams solving real problems.
            </p>
            <ul className="hero-highlights">
              {heroHighlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
            <div className="cta-group">
              <a
                className="btn primary"
                href="https://jacobmacinnis.netlify.app/files/Jacob_MacInnis_Cloud_AI.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </a>
              <a
                className="btn secondary"
                href="mailto:jacobmacinnis7@gmail.com?subject=Let%27s%20talk%20engineering%20leadership"
              >
                Book a Call
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="stat-card">
              <p className="stat-label">Latest Impact</p>
              <p className="stat-value">10k+ Stores</p>
              <p className="stat-detail">Serverless retail architecture powering 1M+ daily transactions.</p>
            </div>
            <div className="stat-card glass">
              <p className="stat-label">Team Focus</p>
              <p className="stat-value">Director of Engineering</p>
              <p className="stat-detail">Leading full stack engineering org across North America, Europe, Australia.</p>
            </div>
            <div className="visual-footer">
              <p className="stat-label">Academia, Certifications and Publications</p>
              <p>
                Certified in AI/ML by Stanford, Duke, DeepLearning.AI, Google and more, as well as author of 50+ technical articles.
              </p>
              <p>Working through Masters of Science in Artificial Intelligence at Colorado Boulder</p>
              <a
                className="btn tertiary"
                href="#about"
                onClick={() => this.scrollToSection('about')}
              >
                About &amp; Projects
              </a>
            </div>
          </div>
        </div>

        <div className="scroll-hint">
          <a href="#about" onClick={() => this.scrollToSection('about')}>
            <span>Scroll for more</span>
            <i className="fas fa-chevron-down" aria-hidden="true"></i>
          </a>
        </div>
      </section>
    );
  }
}

export default LandingPage;

/* -------------------------------------------------------------------------- */
/* Legacy hero preserved for quick rollback                                    */
/* -------------------------------------------------------------------------- */
/*
import Typing from 'react-typing-animation';
import { animateScroll as scroll } from 'react-scroll';

const typingTexts = [
  "Leading engineering teams to build scalable, real-world solutions.",
  "Designing cloud-native architectures that prioritize resilience and flexibility.",
  "Balancing technical execution with strategic decision-making.",
  "Simplifying complex systems without compromising scalability.",
  "Guiding teams through architectural transitions, from monoliths to microservices.",
  "Managing just-in-time architecture to support product agility.",
  "Mentoring engineers across all levels to improve technical and leadership skills.",
  "Working at the intersection of engineering leadership and AI-driven solutions.",
  "Focus on aligning engineering decisions with business outcomes.",
  "Are you still reading? Here’s what I’m working on now.",
  "Exploring AI applications in software engineering and system optimization.",
  "Refining my approach to distributed architectures and cloud efficiency.",
  "Still mentoring, still learning, and still improving how we build software.",
  "See below for projects, insights, and ways to connect."
];

class LegacyLandingPage extends Component {
  scrollTo() {
    scroll.scrollTo(1000);
  }
  handleSetActive() {}
  render() {
    return (
      <div className="landing-page" id='home'>
        <header className='header'>
          <h1 className='name'>JACOB MACINNIS</h1>
          <h2>Engineering Leadership</h2>
          <h2>Cloud & AI</h2>
          <br />
          <Typing className='what-i-do' loop={true} hideCursor={true} speed={60}>
            <Typing.Reset count={1} delay={10} />
            {typingTexts.map((text, index) => (
              <React.Fragment key={index}>
                <Typing.Delay ms={1700} />
                <h2>{text}</h2>
                <Typing.Delay ms={1700} />
                <Typing.Backspace count={text.length} />
                <Typing.Delay ms={1000} />
              </React.Fragment>
            ))}
          </Typing>
        </header>
        <div className='arrow-div'>
          <Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
            <i className="fas fa-chevron-circle-down arrow fa-3x"></i>
          </Link>
        </div>
      </div>
    );
  }
}
*/
