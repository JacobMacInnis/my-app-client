import React, { Component } from 'react';
import './styles/top-nav.css';

class TopNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLight: false,
      mobileMenuOpen: false
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
    this.setState(prev => ({ mobileMenuOpen: !prev.mobileMenuOpen }));
  };

  closeMobileMenu = () => {
    this.setState({ mobileMenuOpen: false });
  };

  render() {
    const { isLight, mobileMenuOpen } = this.state;
    const navLinks = [
      { label: 'Home', href: '/#home' },
      { label: 'About', href: '/#about' },
      { label: 'Projects', href: '/#projects' },
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
            {navLinks.slice(1).map(link => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
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
              {navLinks.map(link => (
                <a key={link.label} href={link.href} onClick={this.closeMobileMenu}>
                  {link.label}
                </a>
              ))}
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
