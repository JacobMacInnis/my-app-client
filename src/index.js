import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { unregister as unregisterServiceWorker } from './registerServiceWorker';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Router>
    <App />
  </Router>
);
// The CRA service worker served cached content on the next visit, so freshly
// deployed updates were invisible to returning visitors. Unregistering also
// removes workers already installed in their browsers.
unregisterServiceWorker();
