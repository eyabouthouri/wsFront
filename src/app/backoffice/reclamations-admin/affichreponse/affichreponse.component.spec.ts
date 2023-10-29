import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichreponseComponent } from './affichreponse.component';

describe('AffichreponseComponent', () => {
  let component: AffichreponseComponent;
  let fixture: ComponentFixture<AffichreponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichreponseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichreponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
