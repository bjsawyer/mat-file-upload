import { TestBed } from '@angular/core/testing'

import { MatFileUploadService } from './mat-file-upload.service'

describe('MatFileUploadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}))

  it('should be created', () => {
    const service: MatFileUploadService = TestBed.get(MatFileUploadService)
    expect(service).toBeTruthy()
  })
})
