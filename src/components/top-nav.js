import React, { Component } from 'react';
import PersistantIcons from './persistant-icons';
import './top-nav.css';

class TopNav extends Component {
  render() {
    return (
      <div className='top-nav'>
        <PersistantIcons class='nav-bar-element' />
      </div>
    );
  }
}

export default TopNav;