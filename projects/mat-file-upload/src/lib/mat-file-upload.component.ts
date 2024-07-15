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
      type="button"
      aria-label="Remove Selected File(s)"
      *ngIf="selectedFiles != null && selectedFiles.length > 0"
    >
      <mat-icon *ngIf="!customSvgIcon">close</mat-icon>
      <mat-icon *ngIf="customSvgIcon" [svgIcon]="customSvgIcon"></mat-icon>
    </button>
  `,
  styles: [
    `
      :host {
        display: flex;
        align-items: center;
      }
      .file-input-button {
        margin-right: 8px;
      }
      .file-input-text {
        font-size: 14px;
        font-family: var(
          --mdc-typography-button-font-family,
          var(--mdc-typography-font-family, Roboto, sans-serif)
        );
        margin-right: 8px;
      }
    `,
  ],
})
export class MatFileUploadComponent {
  @Input() labelText = 'Select File(s)'
  @Input() selectButtonText = 'Select File(s)'
  @Input() selectFilesButtonType: 'button' | 'menu' | 'reset' | 'submit' =
    'button'
  @Input() uploadButtonText = 'Upload File(s)'
  @Input() uploadButtonType: 'button' | 'menu' | 'reset' | 'submit' = 'button'
  @Input() allowMultipleFiles = false
  @Input() showUploadButton = true
  @Input() acceptedTypes = '*.*'
  @Input() customSvgIcon?: string = null
  @Output() uploadClicked: EventEmitter<FileList> = new EventEmitter<FileList>()
  @Output() selectedFilesChanged: EventEmitter<FileList> =
    new EventEmitter<FileList>()

  @ViewChild('fileInput') fileInputRef: ElementRef
  selectedFiles: FileList
  selectedFileText = ''

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
