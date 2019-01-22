import React from 'react';
import { Timeline } from 'react-twitter-widgets';
import './styles/twitter-section.css';

export default () => (
  <section className='twitter' id='twitter'>
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