import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetAppComponent } from './pet-app.component';

describe('PetAppComponent', () => {
  let component: PetAppComponent;
  let fixture: ComponentFixture<PetAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
