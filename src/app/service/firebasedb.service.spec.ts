import { TestBed, inject } from '@angular/core/testing';

import { FirebasedbService } from './firebasedb.service';

describe('FirebasedbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirebasedbService]
    });
  });

  it('should be created', inject([FirebasedbService], (service: FirebasedbService) => {
    expect(service).toBeTruthy();
  }));
});
