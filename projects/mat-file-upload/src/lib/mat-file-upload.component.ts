import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core'

@Component({
  selector: 'mat-file-upload',
  template: `
    <span class="file-input-text">{{ labelText }}</span>
    <button
      mat-button
      [type]="selectFilesButtonType"
      color="primary"
      class="file-input-button"
      (click)="fileInput.click()"
      [attr.aria-label]="selectButtonText"
    >
      <span>{{ selectButtonText }}</span>
      <input
        #fileInput
        type="file"
        style="display: none"
        [accept]="acceptedTypes"
        [multiple]="allowMultipleFiles"
        (change)="filesChanged($event.target.files)"
      />
    </button>
    <button
      mat-raised-button
      [type]="uploadButtonType"
      color="primary"
      class="file-input-button"
      [disabled]="!selectedFiles"
      (click)="uploadFiles()"
      *ngIf="showUploadButton"
      [attr.aria-label]="uploadButtonText"
    >
      {{ uploadButtonText }}
    </button>
    <span class="file-input-text">{{ selectedFileText }}</span>
    <button
      mat-icon-button
      (click)="filesChanged(null)"
      aria-label="Remove Selected File(s)"
    >
      <mat-icon *ngIf="!customSvgIcon">close</mat-icon>
      <mat-icon *ngIf="customSvgIcon" [svgIcon]="customSvgIcon"></mat-icon>
    </button>
  `,
  styles: [
    '.file-input-button { margin-right: 8px !important }',
    '.file-input-text { font-size: 14px !important; margin-right: 8px !important }',
  ],
})
export class MatFileUploadComponent {
  @Input() labelText = 'Select File(s)';
  @Input() selectButtonText = 'Select File(s)';
  @Input() selectFilesButtonType: 'button' | 'menu' | 'reset' | 'submit' = 'button';
  @Input() uploadButtonText = 'Upload File(s)';
  @Input() uploadButtonType: 'button' | 'menu' | 'reset' | 'submit' = 'button';
  @Input() allowMultipleFiles = false;
  @Input() showUploadButton = true;
  @Input() acceptedTypes = '*.*';
  @Input() customSvgIcon?: string = null;
  @Output() uploadClicked: EventEmitter<FileList> = new EventEmitter<FileList>();
  @Output() selectedFilesChanged: EventEmitter<FileList> = new EventEmitter<FileList>();

  @ViewChild('fileInput', { static: false }) fileInputRef: ElementRef
  selectedFiles: FileList;
  selectedFileText = '';

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
      this.resetFileInput()
    }
  }

  uploadFiles(): void {
    this.uploadClicked.emit(this.selectedFiles)
    this.resetFileInput()
  }

  resetFileInput(): void {
    this.fileInputRef.nativeElement.value = ''
  }
}
