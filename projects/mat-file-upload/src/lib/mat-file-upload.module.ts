import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { MatFileUploadComponent } from './mat-file-upload.component'

@NgModule({
  declarations: [MatFileUploadComponent],
  imports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
  ],
  exports: [MatFileUploadComponent],
})
export class MatFileUploadModule {}
