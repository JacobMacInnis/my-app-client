import React, { Component } from 'react';
import './styles/top-nav.css';

const THEME_KEY = 'jm-theme';

const getInitialTheme = () => {
  try {
    const stored = window.localStorage.getItem(THEME_KEY);
    if (stored === 'light' || stored === 'dark') {
      return stored === 'light';
    }
  } catch (error) {
    /* localStorage unavailable (private mode) — fall through to system preference */
  }
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
};

class TopNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLight: getInitialTheme(),
      mobileMenuOpen: false,
      projectsMenuOpen: false
    };
  }

  componentDidMount() {
    this.applyTheme();
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.isLight !== this.state.isLight) {
      this.applyTheme();
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.key === 'Escape') {
      this.setState({ mobileMenuOpen: false, projectsMenuOpen: false });
    }
  };

  applyTheme() {
    const root = document.documentElement;
    if (!root) return;
    const theme = this.state.isLight ? 'light' : 'dark';
    root.setAttribute('data-theme', theme);
    try {
      window.localStorage.setItem(THEME_KEY, theme);
    } catch (error) {
      /* persistence is best-effort */
    }
  }

  toggleTheme = () => {
    this.setState(prevState => ({ isLight: !prevState.isLight }));
  };

  toggleMobileMenu = () => {
    this.setState(prev => ({
      mobileMenuOpen: !prev.mobileMenuOpen,
      projectsMenuOpen: prev.mobileMenuOpen ? false : prev.projectsMenuOpen
    }));
  };

  closeMobileMenu = () => {
    this.setState({ mobileMenuOpen: false, projectsMenuOpen: false });
  };

  toggleProjectsMenu = () => {
    this.setState(prev => ({ projectsMenuOpen: !prev.projectsMenuOpen }));
  };

  closeProjectsMenu = () => {
    this.setState({ projectsMenuOpen: false });
  };

  handleProjectLinkClick = () => {
    this.setState({ projectsMenuOpen: false, mobileMenuOpen: false });
  };

  render() {
    const { isLight, mobileMenuOpen, projectsMenuOpen } = this.state;
    const projectMenuItems = [
      { label: 'AI Projects', href: '/#projects-ai' },
      { label: 'ML Projects', href: '/#projects-ml' },
      { label: 'Full Stack Legacy', href: '/#projects-legacy' }
    ];
    const navLinks = [
      { label: 'Home', href: '/#home' },
      { label: 'About', href: '/#about' },
      { label: 'Projects', sublinks: projectMenuItems },
      { label: 'Tech Stack', href: '/#tech-stack' },
      { label: 'Contact', href: '/#contact' }
    ];

    return (
      <header className={`top-nav ${isLight ? 'light' : 'dark'}`}>
        <div className="nav-content">
          <div className="nav-left">
            <button className="mobile-toggle" onClick={this.toggleMobileMenu} aria-label="Open navigation menu">
              <span />
              <span />
              <span />
            </button>
            <a className="brand" href="/#home">
              Jacob MacInnis
            </a>
          </div>
          <nav className="nav-links">
            {navLinks
              .filter(link => link.label !== 'Home')
              .map(link => {
                if (link.sublinks) {
                  return (
                    <div
                      key={link.label}
                      className={`nav-link-group ${projectsMenuOpen ? 'open' : ''}`}
                      onMouseLeave={this.closeProjectsMenu}
                    >
                      <button
                        type="button"
                        className="nav-link-toggle"
                        onClick={this.toggleProjectsMenu}
                        aria-haspopup="true"
                        aria-expanded={projectsMenuOpen}
                      >
                        {link.label}
                        <span className="chevron" aria-hidden="true" />
                      </button>
                      <div className="nav-dropdown" role="menu">
                        {link.sublinks.map(sublink => (
                          <a key={sublink.label} href={sublink.href} onClick={this.handleProjectLinkClick} role="menuitem">
                            {sublink.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  );
                }
                return (
                  <a key={link.label} href={link.href}>
                    {link.label}
                  </a>
                );
              })}
          </nav>
          <div className="nav-actions">
            <button
              type="button"
              className="theme-toggle"
              onClick={this.toggleTheme}
              aria-label={`Switch to ${isLight ? 'dark' : 'light'} theme`}
              title={`Switch to ${isLight ? 'dark' : 'light'} theme`}
            >
              <i className={isLight ? 'fas fa-moon' : 'fas fa-sun'} aria-hidden="true" />
            </button>
            <a className="resume-link" href="/resume">
              Resume
            </a>
          </div>
        </div>
        <div className={`mobile-backdrop ${mobileMenuOpen ? 'open' : ''}`} onClick={this.closeMobileMenu} />
        <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-drawer-content">
            <button className="mobile-close" onClick={this.closeMobileMenu} aria-label="Close navigation menu">
              ×
            </button>
            <nav>
              {navLinks.map(link => {
                if (link.sublinks) {
                  return (
                    <div key={link.label} className="mobile-link-group">
                      <button
                        type="button"
                        className="mobile-link-toggle"
                        onClick={this.toggleProjectsMenu}
                        aria-haspopup="true"
                        aria-expanded={projectsMenuOpen}
                      >
                        {link.label}
                        <span className="chevron" aria-hidden="true" />
                      </button>
                      <div className={`mobile-sub-links ${projectsMenuOpen ? 'open' : ''}`}>
                        {link.sublinks.map(sublink => (
                          <a key={sublink.label} href={sublink.href} onClick={this.handleProjectLinkClick}>
                            {sublink.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  );
                }
                return (
                  <a key={link.label} href={link.href} onClick={this.closeMobileMenu}>
                    {link.label}
                  </a>
                );
              })}
            </nav>
            <button type="button" className="mobile-theme" onClick={this.toggleTheme}>
              <i className={isLight ? 'fas fa-moon' : 'fas fa-sun'} aria-hidden="true" />
              &nbsp;{isLight ? 'Dark theme' : 'Light theme'}
            </button>
            <a className="mobile-resume" href="/resume" onClick={this.closeMobileMenu}>
              Resume
            </a>
            <a
              className="mobile-resume ghost"
              href="/files/Jacob_MacInnis_Cloud_AI.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={this.closeMobileMenu}
            >
              Download PDF
            </a>
          </div>
        </div>
      </header>
    );
  }
}

export default TopNav;
