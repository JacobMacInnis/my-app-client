import React, { Component } from 'react';
import { Timeline } from 'react-twitter-widgets';
import './twitter-section.css';


class Twitter extends Component {
  render() {
    return (
      <section className='twitter'>
        <h2 className='twitter-header'>Twitter</h2>
        <div className='twitter-widget'>
          <Timeline                     
            dataSource={{
              sourceType: "profile",
              screenName: "jacobcmacinnis"
            }}
            options={{username: "jacobcmacinnis", height: '500px'}}
          />
        </div>
      </section>
    );
  }
}

export default Twitter;