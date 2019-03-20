import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatToolbarModule,
} from '@angular/material'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatFileUploadModule } from 'projects/mat-file-upload/src/public-api'

import { AppComponent } from './app.component'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFileUploadModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatCardModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
