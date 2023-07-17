import { TestBed } from '@angular/core/testing';

import { CommentSerivesService } from './comment-serives.service';

describe('CommentSerivesService', () => {
  let service: CommentSerivesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentSerivesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
