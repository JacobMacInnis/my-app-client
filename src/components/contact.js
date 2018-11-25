import React, { Component } from 'react';
import './styles/contact.css';
import PhonePopup from './phone-popup';

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
  render() {
    return (
      <footer className="footer" id='contact'>
        <h2 className='footer-header'>Contact</h2>
        <div className='footer-info'>
          <p>Jacob MacInnis</p>
          <p>Marblehead, Massachusetts</p>
        </div>
        <section className='footer-icons'>
          <button className='phone-icon' onClick={this.togglePopup.bind(this)}><i className="fas fa-phone fa-5x icon"></i></button>
          <a href='mailto:jacobmacinnis7@gmail.com' className='mail-link'><i className="fas fa-envelope fa-4x icon"></i></a>
          <a href='https://github.com/JacobMacInnis' className='github-link'  target="_blank" rel='noopener noreferrer'><i className="fab fa-github fa-4x icon"></i></a>
          <a href='https://www.linkedin.com/in/jacob-macinnis/' className='linkedin-link'  target="_blank" rel='noopener noreferrer'><i className="fab fa-linkedin-in fa-4x icon"></i></a>
          <a href='https://twitter.com/jacobcmacinnis' className='twitter-link' target='_blank' rel='noopener noreferrer'><i className="fab fa-twitter icon fa-4x"></i></a>
        </section>
        {this.state.showPopup ? 
          <PhonePopup
            text='Close Me'
            closePopup={this.togglePopup.bind(this)}
          />
          : null
        }
      </footer>
    );
  }
}

export default Contact;