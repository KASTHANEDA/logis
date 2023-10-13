import { Component, OnInit } from '@angular/core';
import { CotizacionesService } from '../../service/servicesCotizaciones/services.cotizaciones';


@Component({
  selector: 'app-cotizaciones',
  templateUrl: './cotizaciones.component.html',
  styleUrls: ['./cotizaciones.component.css']
})
export class CotizacionesComponent implements OnInit {
  arrCot: any[] = [];
  cotService: any;

  constructor(private cotizacionesService: CotizacionesService) {}

  ngOnInit() {
    this.loadCotizaciones();
  }

  async loadCotizaciones() {
    try {
      this.arrCot = await this.cotizacionesService.getAll();
    } catch (error) {
      console.error('Error al obtener datos: ', error);
    }
  }

  async deleteCotizacion(cotizacionId: string) {
    try {
      await this.cotizacionesService.deleteCotizacion(cotizacionId);
      this.arrCot = this.arrCot.filter(cot => cot._id !== cotizacionId);
    } catch (error) {
      console.error('Error al eliminar cotización: ', error);
    }
  }

  editCotizaciones(a: any){
    const cot =  this.cotService.editCotizaciones(a);
  }
  
}

