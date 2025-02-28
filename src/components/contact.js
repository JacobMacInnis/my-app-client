import React, { Component } from 'react';
import './styles/contact.css';
import PhonePopup from './phone-popup';
import { animateScroll as scroll } from 'react-scroll'

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false
    };
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  render() {
    return (
      <footer className="footer" id='contact'>
        <h2 className='footer-header'>Contact</h2>
        <div className='footer-info'>
          <p>Jacob MacInnis</p>
        </div>
        <section className='footer-icons'>
          <a href='mailto:jacobmacinnis7@gmail.com' className='mail-link'><i className="fas fa-envelope fa-4x icon"></i></a>
          <button className='phone-icon' onClick={this.togglePopup.bind(this)}><i className="fas fa-phone fa-4x icon phone-icon-fa"></i></button>
          <a href='https://github.com/JacobMacInnis' className='github-link' target="_blank" rel='noopener noreferrer'><i className="fab fa-github fa-4x icon"></i></a>
          <a href='https://www.linkedin.com/in/jacob-macinnis/' className='linkedin-link' target="_blank" rel='noopener noreferrer'><i className="fab fa-linkedin-in fa-4x icon"></i></a>
          <a href='https://stackoverflow.com/users/10368887/jacob-macinnis' className='stack-overflow' target="_blank" rel='noopener noreferrer'><i className="fab fa-stack-overflow fa-4x icon"></i></a>
          {/* <a href='https://twitter.com/jacobcmacinnis' className='twitter-link' target='_blank' rel='noopener noreferrer'><i className="fab fa-twitter icon fa-4x"></i></a> */}
        </section>
        {this.state.showPopup ?
          <PhonePopup
            text='Close Me'
            closePopup={this.togglePopup.bind(this)}
          />
          : null
        }
        <div className='scroll-to-top'>
          <a className='w3-animate-fading' onClick={this.scrollToTop}>
            <i className="fas fa-chevron-circle-up arrow fa-3x"></i>
          </a>
        </div>
      </footer>
    );
  }
}

export default Contact;