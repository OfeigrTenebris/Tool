import AwsS3 from '@Tool/aws-s3'
import Tool from '@Tool/core'
import Dashboard from '@Tool/dashboard'
import GoogleDrive from '@Tool/google-drive'
import Webcam from '@Tool/webcam'

import '@Tool/core/dist/style.css'
import '@Tool/dashboard/dist/style.css'
import '@Tool/webcam/dist/style.css'

const Tool = new Tool({
  debug: true,
  autoProceed: false,
})

Tool.use(GoogleDrive, {
  companionUrl: 'http://localhost:3020',
})
Tool.use(Webcam)
Tool.use(Dashboard, {
  inline: true,
  target: 'body',
  plugins: ['GoogleDrive', 'Webcam'],
})
Tool.use(AwsS3, {
  companionUrl: 'http://localhost:3020',
})
