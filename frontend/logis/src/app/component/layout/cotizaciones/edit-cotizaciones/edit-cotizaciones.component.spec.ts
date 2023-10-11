import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCotizacionesComponent } from './edit-cotizaciones.component';

describe('EditCotizacionesComponent', () => {
  let component: EditCotizacionesComponent;
  let fixture: ComponentFixture<EditCotizacionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditCotizacionesComponent]
    });
    fixture = TestBed.createComponent(EditCotizacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
