import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetFilterComponent } from './pet-filter.component';

describe('PetFilterComponent', () => {
  let component: PetFilterComponent;
  let fixture: ComponentFixture<PetFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
