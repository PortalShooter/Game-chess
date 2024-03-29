import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/styles/index.css';
import App from './App';
import './helper/vars'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
