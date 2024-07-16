import { Tool } from '@Tool/core'
import Dashboard from '@Tool/dashboard'
import AwsS3 from '@Tool/aws-s3'

import '@Tool/core/dist/style.css'
import '@Tool/dashboard/dist/style.css'

const Tool = new Tool()
  .use(Dashboard, { target: '#app', inline: true })
  .use(AwsS3, {
    limit: 2,
    companionUrl: process.env.VITE_COMPANION_URL,
  })

// Keep this here to access Tool in tests
window.Tool = Tool
