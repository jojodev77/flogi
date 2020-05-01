import { TestBed } from '@angular/core/testing';

import { CreateFormulaireService } from './create-formulaire.service';

describe('CreateFormulaireService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateFormulaireService = TestBed.get(CreateFormulaireService);
    expect(service).toBeTruthy();
  });
});
