import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from './App'
import { StaticRouter } from "react-router-dom/server";
import './index.css';
import { HelmetProvider } from 'react-helmet-async';

export async function render(url) {
  const context = {};
  const helmetContext = {};
  const currentURL = `/${url}`;

  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <StaticRouter location={currentURL} context={context}>
        <HelmetProvider context={helmetContext}>
          <App />
        </HelmetProvider>
      </StaticRouter>
    </React.StrictMode>
  )

  const { helmet } = helmetContext;

  return { html, helmet }
}
