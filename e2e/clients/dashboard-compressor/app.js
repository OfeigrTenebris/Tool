import Tool from '@Tool/core'
import Dashboard from '@Tool/dashboard'
import Compressor from '@Tool/compressor'

import '@Tool/core/dist/style.css'
import '@Tool/dashboard/dist/style.css'

const Tool = new Tool()
  .use(Dashboard, {
    target: document.body,
    inline: true,
  })
  .use(Compressor, {
    mimeType: 'image/webp',
  })

// Keep this here to access Tool in tests
window.Tool = Tool
