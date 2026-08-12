import React from 'react';
import './styles/not-found.css';

// Netlify rewrites every unmatched path to index.html so /resume survives a
// direct hit, which means a typo'd URL reaches the router instead of Netlify's
// own 404 card. Without this route it would render the nav over empty space.
const NotFound = () => (
  <main className='notfound-page'>
    <section className='notfound-panel'>
      <p className='notfound-code'>404</p>
      <h1>This page doesn&rsquo;t exist</h1>
      <p className='notfound-body'>
        The link may be out of date, or the address may have a typo in it.
      </p>
      <div className='notfound-actions'>
        <a className='notfound-btn primary' href='/'>
          Back to home
        </a>
        <a className='notfound-btn ghost' href='/resume'>
          View resume
        </a>
      </div>
    </section>
  </main>
);

export default NotFound;
