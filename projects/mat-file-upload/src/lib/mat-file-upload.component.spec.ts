import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { MatIconModule } from '@angular/material'

import { MatFileUploadComponent } from './mat-file-upload.component'

describe('MatFileUploadComponent', () => {
  let component: MatFileUploadComponent
  let fixture: ComponentFixture<MatFileUploadComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MatFileUploadComponent],
      imports: [MatIconModule],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(MatFileUploadComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  describe('filesChanged', () => {
    it('should set selectedFileText to empty string when no files are passed in', () => {
      component.filesChanged(null)
      expect(component.selectedFileText).toBe('')
    })

    it('should set selectedFileText to the name of the file passed in', () => {
      const mockFiles = mockFileList()
      component.filesChanged(mockFiles)
      expect(component.selectedFileText).toBe('filename')
    })

    it('should set selectedFiles to the files passed in', () => {
      const mockFiles = mockFileList()
      component.filesChanged(mockFiles)
      expect(component.selectedFiles).toBe(mockFiles)
    })
  })
})

export function mockFileList(): FileList {
  const blob = new Blob([''], { type: 'text/html' })
  // tslint:disable-next-line: no-string-literal
  blob['lastModifiedDate'] = ''
  // tslint:disable-next-line: no-string-literal
  blob['name'] = 'filename'
  const file = blob as File
  return {
    0: file,
    length: 1,
    item: (index: number) => file,
  }
}
