import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import {
  ToolAngularDashboardModule,
  ToolAngularStatusBarModule,
  ToolAngularDragDropModule,
  ToolAngularProgressBarModule,
  ToolAngularDashboardModalModule,
} from '@Tool' +
  /angular'
import { AppComponent } from './app.component'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ToolAngularDashboardModule,
    ToolAngularStatusBarModule,
    ToolAngularDashboardModalModule,
    ToolAngularDragDropModule,
    ToolAngularProgressBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
