import React, { Component } from 'react';
import './persistant-icons.css';
import resume from './../files/Jacob-MacInnis-Resume.pdf';

class PersistantIcons extends Component {
  render() {
    return (
      <div className='persistant-container'>
        <a href={resume}
        alt='resume pdf'><i class="fas fa-print fa-3x print-icon"></i>
        </a>
      </div>
    );
  }
}

export default PersistantIcons;