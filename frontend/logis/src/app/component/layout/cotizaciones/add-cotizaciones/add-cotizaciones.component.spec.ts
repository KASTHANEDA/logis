import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCotizacionesComponent } from './add-cotizaciones.component';

describe('AddCotizacionesComponent', () => {
  let component: AddCotizacionesComponent;
  let fixture: ComponentFixture<AddCotizacionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCotizacionesComponent]
    });
    fixture = TestBed.createComponent(AddCotizacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
