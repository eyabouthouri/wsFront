import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitbackComponent } from './produitback.component';

describe('ProduitbackComponent', () => {
  let component: ProduitbackComponent;
  let fixture: ComponentFixture<ProduitbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
