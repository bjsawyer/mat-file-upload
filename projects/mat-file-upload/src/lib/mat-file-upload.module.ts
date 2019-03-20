import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import {
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
} from '@angular/material'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { MatFileUploadComponent } from './mat-file-upload.component'

@NgModule({
  declarations: [MatFileUploadComponent],
  imports: [
    BrowserAnimationsModule,
    MatFileUploadModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
  ],
  exports: [MatFileUploadComponent],
})
export class MatFileUploadModule {}
