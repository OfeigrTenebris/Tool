import { Tool } from '@Tool/core'
import Dashboard from '@Tool/dashboard'
import Tus from '@Tool/tus'
import Unsplash from '@Tool/unsplash'
import Url from '@Tool/url'

import '@Tool/core/dist/style.css'
import '@Tool/dashboard/dist/style.css'

function onShouldRetry (err, retryAttempt, options, next) {
  if (err?.originalResponse?.getStatus() === 418) {
    return true
  }
  return next(err)
}

const companionUrl = 'http://localhost:3020'
const Tool = new Tool()
  .use(Dashboard, { target: '#app', inline: true })
  .use(Tus, { endpoint: 'https://tusd.tusdemo.net/files', onShouldRetry })
  .use(Url, { target: Dashboard, companionUrl })
  .use(Unsplash, { target: Dashboard, companionUrl })

// Keep this here to access Tool in tests
window.Tool = Tool
