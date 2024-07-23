import { Tool } from '@Tool/core'
import Dashboard from '@Tool/dashboard'
import Transloadit from '@Tool/transloadit'

import generateSignatureIfSecret from './generateSignatureIfSecret.js'

import '@Tool/core/dist/style.css'
import '@Tool/dashboard/dist/style.css'

// Environment variables:
// https://en.parceljs.org/env.html
const Tool = new Tool()
  .use(Dashboard, { target: '#app', inline: true })
  .use(Transloadit, {
    service: process.env.VITE_TRANSLOADIT_SERVICE_URL,
    waitForEncoding: true,
    getAssemblyOptions: () => generateSignatureIfSecret(process.env.VITE_TRANSLOADIT_SECRET, {
      auth: { key: process.env.VITE_TRANSLOADIT_KEY },
      template_id: process.env.VITE_TRANSLOADIT_TEMPLATE,
    }),
  })

// Keep this here to access Tool in tests
window.Tool = Tool
