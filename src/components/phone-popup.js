import React, { Component } from 'react';
import './styles/phone-popup.css';

export default class PhonePopup extends React.Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <h1>Mobile</h1>
          <h1>508-244-1362</h1>
          <button onClick={this.props.closePopup}>close me</button>
        </div>
      </div>
    );
  }
}