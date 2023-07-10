import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from "react-router-dom";
import App from './App'
import { HelmetProvider } from 'react-helmet-async'

ReactDOM.hydrateRoot(document.getElementById('root'),
  // <Router future={{ v7_startTransition: true }}>
  <Router>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </Router>
)
