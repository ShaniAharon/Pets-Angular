import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetPreviewComponent } from './pet-preview.component';

describe('PetPreviewComponent', () => {
  let component: PetPreviewComponent;
  let fixture: ComponentFixture<PetPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
