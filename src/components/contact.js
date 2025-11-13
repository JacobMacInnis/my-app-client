import React from 'react';
import './styles/contact.css';

const contactChannels = [
  {
    label: 'LinkedIn',
    action: 'linkedin.com/in/jacob-macinnis',
    href: 'https://www.linkedin.com/in/jacob-macinnis/',
    icon: 'fab fa-linkedin-in'
  },
  {
    label: 'Email',
    action: 'jacobmacinnis7@gmail.com',
    href: 'mailto:jacobmacinnis7@gmail.com',
    icon: 'fas fa-envelope'
  },
  {
    label: 'Phone',
    action: '(508) 244-1362',
    href: 'tel:5082441362',
    icon: 'fas fa-phone'
  }
];

const socialLinks = [
  // asdfd{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/jacob-macinnis/', icon: 'fab fa-linkedin-in' },
  { label: 'GitHub', href: 'https://github.com/JacobMacInnis', icon: 'fab fa-github' },
  { label: 'Medium', href: 'https://medium.com/@jacobmacinnis', icon: 'fab fa-medium' },
  { label: 'Stack Overflow', href: 'https://stackoverflow.com/users/10368887/jacob-macinnis', icon: 'fab fa-stack-overflow' }
];

const Contact = () => (
  <footer className="contact-section" id="contact">
    <div className="contact-card">
      <div className="contact-header">
        <p className="eyebrow caption">Let’s connect</p>
        <h2>Contact</h2>
        <p>Drop a note with context. I reply as bandwidth allows.</p>
      </div>

      <div className="contact-grid">
        {contactChannels.map(channel => (
          <a key={channel.label} className="contact-channel" href={channel.href}>
            <i className={`${channel.icon} channel-icon`} aria-hidden="true"></i>
            <div>
              <span className="channel-label">{channel.label}</span>
              <span className="channel-action">{channel.action}</span>
            </div>
          </a>
        ))}
      </div>

      <div className="contact-socials">
        {socialLinks.map(link => (
          <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
            <i className={`${link.icon} social-icon`} aria-hidden="true"></i>
            <span>{link.label}</span>
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Contact;
