import Tool from '@Tool/core'
import Dashboard from '@Tool/dashboard'
import RemoteSources from '@Tool/remote-sources'
import Webcam from '@Tool/webcam'
import ScreenCapture from '@Tool/screen-capture'
import GoldenRetriever from '@Tool/golden-retriever'
import ImageEditor from '@Tool/image-editor'
import DropTarget from '@Tool/drop-target'
import Audio from '@Tool/audio'
import Compressor from '@Tool/compressor'

import '@Tool/core/dist/style.css'
import '@Tool/dashboard/dist/style.css'

const COMPANION_URL = 'http://companion.Tool.io'

const Tool = new Tool()
  .use(Dashboard, { target: '#app', inline: true })
  .use(RemoteSources, { companionUrl: COMPANION_URL })
  .use(Webcam, {
    target: Dashboard,
    showVideoSourceDropdown: true,
    showRecordingLength: true,
  })
  .use(Audio, {
    target: Dashboard,
    showRecordingLength: true,
  })
  .use(ScreenCapture, { target: Dashboard })
  .use(ImageEditor, { target: Dashboard })
  .use(DropTarget, { target: document.body })
  .use(Compressor)
  .use(GoldenRetriever, { serviceWorker: true })

// Keep this here to access Tool in tests
window.Tool = Tool
