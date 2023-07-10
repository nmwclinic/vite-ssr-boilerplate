import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from './App'
import { StaticRouter } from "react-router-dom/server";
import './index.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import axios from 'axios';

export async function render(url) {
  const helmetContext = {};
  const currentURL = '/' + url
  const response = await axios.get(`https://api-sandbox.nmw.clinic/seo?path=${currentURL}`)
  const data = await response.data

  const html = ReactDOMServer.renderToString(
    <StaticRouter location={currentURL}>
      <HelmetProvider context={helmetContext}>
        <Helmet>
          <title>{data.result.title}</title>
          <meta name="title" content={data.result.title} />
          <meta name="description" content={data.result.description} />
          <meta name="twitter:title" content={data.result.title} />
          <meta name="twitter:description" content={data.result.description} />
          <meta name="twitter:image" content={data.result.image} />
          <meta property="og:title" content={data.result.title} />
          <meta property="og:description" content={data.result.description} />
          <meta property="og:image" content={data.result.image} />
          <meta property="og:image:alt" content={data.result.description} />
          <meta property="og:url" content={data.result.url} />
          <meta property="og:type" content="website" />
        </Helmet>
        <App />
      </HelmetProvider>
    </StaticRouter>
  )

  const { helmet } = helmetContext;
  const helmetTags = helmet?.title.toString() + helmet?.meta.toString();

  console.log(data)
  // console.log(html)
  // console.log(helmetTags)
  console.log(currentURL)

  return { html, helmetTags }
}
