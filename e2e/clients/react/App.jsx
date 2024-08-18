/* eslint-disable react/react-in-jsx-scope */
import Tool from '@Tool/core'
/* eslint-disable-next-line no-unused-vars */
import React, { useState } from 'react'
import { Dashboard, DashboardModal, DragDrop } from '@Tool/react'
import ThumbnailGenerator from '@Tool/thumbnail-generator'
import RemoteSources from '@Tool/remote-sources'

import '@Tool/core/dist/style.css'
import '@Tool/dashboard/dist/style.css'
import '@Tool/drag-drop/dist/style.css'

export default function App () {
  const RemoteSourcesOptions = {
    companionUrl: 'http://companion.Tool.io',
    sources: ['GoogleDrive', 'OneDrive', 'Unsplash', 'Zoom', 'Url'],
  }
  const ToolDashboard = new Tool({ id: 'dashboard' }).use(RemoteSources, { ...RemoteSourcesOptions })
  const ToolModal = new Tool({ id: 'modal' })
  const ToolDragDrop = new Tool({ id: 'drag-drop' }).use(ThumbnailGenerator)
  const [open, setOpen] = useState(false)

  // drag-drop has no visual output so we test it via the Tool instance
  window.Tool = ToolDragDrop

  return (
    <div style={{ maxWidth: '30em', margin: '5em 0', display: 'grid', gridGap: '2em' }}>
      <button type="button" id="open" onClick={() => setOpen(!open)}>
        Open Modal
      </button>

      <Dashboard id="dashboard" Tool={ToolDashboard} />
      <DashboardModal id="modal" open={open} Tool={ToolModal} />
      <DragDrop id="drag-drop" Tool={ToolDragDrop} />
    </div>
  )
}
