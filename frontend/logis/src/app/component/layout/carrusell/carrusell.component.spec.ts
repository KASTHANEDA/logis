import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrusellComponent } from './carrusell.component';

describe('CarrusellComponent', () => {
  let component: CarrusellComponent;
  let fixture: ComponentFixture<CarrusellComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarrusellComponent]
    });
    fixture = TestBed.createComponent(CarrusellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
