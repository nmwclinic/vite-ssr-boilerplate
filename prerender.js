// Pre-render the app into static HTML.
// run `yarn generate` and then `dist/static` can be served as a static site.

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const template = fs.readFileSync(toAbsolute('dist/static/index.html'), 'utf-8')
const { render } = await import('./dist/server/entry-server.js')

// determine routes to pre-render from src/pages
const routesToPrerender = fs
  .readdirSync(toAbsolute('src/pages'))
  .map((file) => {
    const name = file.replace(/\.jsx$/, '').toLowerCase()
    return name === 'home' ? `/` : `/${name}`
  })

  ; (async () => {

    for (const url of routesToPrerender) {
      const context = {}
      const rendered = await render(url, context)

      // Get Helmet Configuration
      const helmet = rendered.helmet
      const helmetTags = helmet?.title.toString() + helmet?.meta.toString();

      // console.log(helmetTags)

      const html = template
        .replace(`<!--app-head-->`, helmetTags ?? '')
        .replace(`<!--app-html-->`, rendered.html ?? '')

      const filePath = `dist/static${url === '/' ? '/index' : url}.html`
      fs.writeFileSync(toAbsolute(filePath), html)
      console.log('pre-rendered:', filePath)
    }
  })()