import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button'
import { MatIconModule } from '@angular/material/icon'
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input'
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select'

import { MatFileUploadComponent } from './mat-file-upload.component'

@NgModule({
  declarations: [MatFileUploadComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
  ],
  exports: [MatFileUploadComponent],
})
export class MatFileUploadModule {}
