import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/browser'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

Sentry.init({
  dsn: process.env.REACT_APP_SENTRY_DSN,
  release: process.env.REACT_APP_SENTRY_RELEASE,
  environment: process.env.REACT_APP_SENTRY_ENVIRONMENT
});



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();
