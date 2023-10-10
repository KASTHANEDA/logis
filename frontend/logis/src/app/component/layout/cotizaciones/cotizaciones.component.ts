import { Component } from '@angular/core';
import { cotizacionesServices } from '../../service/servicesCotizaciones/services.cotizaciones';

@Component({
  selector: 'app-cotizaciones',
  templateUrl: './cotizaciones.component.html',
  styleUrls: ['./cotizaciones.component.css']
})
export class CotizacionesComponent {
  arrCot: any[] = [];

  constructor(private cotService: cotizacionesServices) {}

  async ngOnInit() {
    try {
      const cot = await this.cotService.getAll();
      if (Array.isArray(cot)) {
        this.arrCot = cot;
      } else {
        console.error('El servicio no devolvió una matriz de datos: ', cot);
      }
    } catch (error) {
      console.error('Error al obtener datos: ', error);
    }
  }
  DelCotizaciones(a: any){
    const cot =  this.cotService.DelCotizaciones(a);
  }
}
