import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { MatFileUploadModule } from 'projects/mat-file-upload/src/public-api'

import { AppComponent } from './app.component'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MatFileUploadModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
