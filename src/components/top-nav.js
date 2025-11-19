import React, { Component } from 'react';
import './styles/top-nav.css';

class TopNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLight: false,
      mobileMenuOpen: false,
      projectsMenuOpen: false
    };
  }

  componentDidMount() {
    this.applyTheme();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.isLight !== this.state.isLight) {
      this.applyTheme();
    }
  }

  componentWillUnmount() {
    const root = document.documentElement;
    if (root) {
      root.removeAttribute('data-theme');
    }
  }

  applyTheme() {
    const root = document.documentElement;
    if (root) {
      root.setAttribute('data-theme', this.state.isLight ? 'light' : 'dark');
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
            <a
              className="resume-link"
              href="/files/Jacob_MacInnis_Cloud_AI.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
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
            <a
              className="mobile-resume"
              href="/files/Jacob_MacInnis_Cloud_AI.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={this.closeMobileMenu}
            >
              Resume
            </a>
          </div>
        </div>
      </header>
    );
  }
}

export default TopNav;
