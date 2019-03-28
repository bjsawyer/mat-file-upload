import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

@Component({
  selector: 'mat-file-upload',
  template: `
    <span class="file-input-text">{{ labelText }}</span>
    <button
      mat-button
      color="primary"
      class="file-input-button"
      (click)="fileInput.click()"
      aria-label="Select File(s)"
    >
      <span>Select File(s)</span>
      <input
        #fileInput
        type="file"
        style="display: none"
        [multiple]="allowMultipleFiles"
        (change)="filesChanged($event.target.files)"
      />
    </button>
    <button
      mat-raised-button
      color="primary"
      class="file-input-button"
      [disabled]="!selectedFiles"
      (click)="uploadFiles()"
      *ngIf="showUploadButton"
      aria-label="Upload File(s)"
    >
      Upload
    </button>
    <span class="file-input-text">{{ selectedFileText }}</span>
    <button
      mat-icon-button
      (click)="filesChanged(null)"
      aria-label="Remove Selected File(s)"
    >
      <mat-icon>close</mat-icon>
    </button>
  `,
  styles: [
    '.file-input-button { margin-right: 8px !important }',
    '.file-input-text { font-size: 14px !important; margin-right: 8px !important }',
  ],
})
export class MatFileUploadComponent implements OnInit {
  @Input() labelText = 'Select File(s)'
  @Input() allowMultipleFiles = false
  @Input() showUploadButton = true
  @Output() uploadClicked: EventEmitter<FileList> = new EventEmitter<FileList>()
  @Output() selectedFilesChanged: EventEmitter<FileList> = new EventEmitter<FileList>()

  selectedFiles: FileList
  selectedFileText = ''

  constructor() {}

  ngOnInit() {}

  filesChanged(files?: FileList): void {
    this.selectedFiles = files
    this.selectedFilesChanged.emit(this.selectedFiles)
    if (this.selectedFiles) {
      const numSelectedFiles = this.selectedFiles.length
      this.selectedFileText =
        numSelectedFiles === 1
          ? this.selectedFiles[0].name
          : `${numSelectedFiles} files selected`
    } else {
      this.selectedFileText = ''
    }
  }

  uploadFiles(): void {
    this.uploadClicked.emit(this.selectedFiles)
  }
}
