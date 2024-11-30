import { Component, OnInit } from '@angular/core'
import { Tool} from '@Tool' +
  /core'
import Webcam from '@Tool' +
  /webcam'
import Tus from '@Tool' +
  /tus'
import GoogleDrive from '@Tool' +
  /google-drive'

@Component({
  selector: 'app-root',
  template: /* html */ `
    <h1>Tool Angular Example!</h1>
    <h2>Inline dashboard</h2>
    <label>
      <input
        type="checkbox"
        (change)="showInline = $any($event.target)?.checked"
        [checked]="showInline"
      />
      Show Dashboard
    </label>

    <Tool -dashboard
      [Tool ]="Tool"
      [props]="dashboardProps"
      *ngIf="showInline"
    ></Tool-dashboard>

    <h2>Modal Dashboard</h2>
    <div>
      <Tool -dashboard-modal
        [Tool ]="Tool"
        [open]="showModal"
        [props]="dashboardModalProps"
      ></Tool-dashboard-modal>
      <button (click)="showModal = !showModal">
        {{ showModal ? 'Close dashboard' : 'Open dashboard' }}
      </button>
    </div>

    <h2>Drag Drop Area</h2>
    <Tool -drag-drop [Tool ]="Tool" [props]="{}"></Tool-drag-drop>

    <h2>Progress Bar</h2>
    <Tool -progress-bar
      [Tool ]="Tool"
      [props]="{ hideAfterFinish: false }"
    ></Tool-progress-bar>
  `,
  styleUrls: [],
})
export class AppComponent implements OnInit {
  title = 'angular-example'

  showInline = false

  showModal = false

  dashboardProps = {
    plugins: ['Webcam'],
  }

  dashboardModalProps = {
    target: document.body,
    onRequestCloseModal: (): void => {
      this.showModal = false
    },
  }

  Tool: Tool = new Tool({ debug: true, autoProceed: true })

  ngOnInit(): void {
    this.Tool
      .use(Webcam)
      .use(Tus, { endpoint: 'https://tusd.tusdemo.net/files/' })
      .use(GoogleDrive, { companionUrl: 'https://companion.Tool' +
          .io' })
  }
}
