import { Tool } from '@Tool/core'
import Dashboard from '@Tool/dashboard'
import XHRUpload from '@Tool/xhr-upload'
import Unsplash from '@Tool/unsplash'
import Url from '@Tool/url'

import '@Tool/core/dist/style.css'
import '@Tool/dashboard/dist/style.css'

const companionUrl = 'http://localhost:3020'
const Tool = new Tool()
  .use(Dashboard, { target: '#app', inline: true })
  .use(XHRUpload, { endpoint: 'https://xhr-server.herokuapp.com/upload', limit: 6 })
  .use(Url, { target: Dashboard, companionUrl })
  .use(Unsplash, { target: Dashboard, companionUrl })

// Keep this here to access Tool in tests
window.Tool = Tool
