import { TestBed, async, inject } from '@angular/core/testing';

import { SegurancaComponentesGuard } from './seguranca-componentes.guard';

describe('SegurancaComponentesGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SegurancaComponentesGuard]
    });
  });

  it('should ...', inject([SegurancaComponentesGuard], (guard: SegurancaComponentesGuard) => {
    expect(guard).toBeTruthy();
  }));
});
