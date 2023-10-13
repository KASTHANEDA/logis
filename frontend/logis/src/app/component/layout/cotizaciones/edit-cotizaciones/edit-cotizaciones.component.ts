import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CotizacionesService } from 'src/app/component/service/servicesCotizaciones/services.cotizaciones';

@Component({
  selector: 'app-edit-cotizaciones',
  templateUrl: './edit-cotizaciones.component.html',
  styleUrls: ['./edit-cotizaciones.component.css']
})
export class EditCotizacionesComponent {
  router = inject(Router);

  formulario: FormGroup;
  
  cotizacionServices = inject(CotizacionesService)


  constructor() {
    this.formulario = new FormGroup({
     

      idCot: new FormControl(),
      Cliente: new FormControl(),
      Modalidad: new FormControl(),
      CiudadOrigen: new FormControl(),
      DireccionOrigen: new FormControl(),
      CiudadDestino: new FormControl(),
      DireccionDestino: new FormControl(),
      Asunto: new FormControl(),
      ClaseMatId: new FormControl(),
      TipoNegocio: new FormControl(),
      ModoTransporte: new FormControl(),
      TerminosNegociacion: new FormControl(),
      EstadoColor: new FormControl(),
      diasTransito: new FormControl(),
      VigenciaOferta: new FormControl(),
      ValorDeclarado: new FormControl(),
      valorCif: new FormControl(),
      ValorCifCalculado: new FormControl(),
      TotalGastosOrigen: new FormControl(),
      moneda: new FormControl(),
      trm: new FormControl(),
      factorEuroDollar: new FormControl(),
      descripcionMercancia: new FormControl(),
      fechaCreacion: new FormControl(),
      fechaModificacion: new FormControl(),
      PaisOrigen: new FormControl(),
      PaisDestino: new FormControl(),
      fechaProximaRevision: new FormControl(),
      idProveedores: new FormControl(),
      Servicios: new FormControl(),
      estado: new FormControl(),
      comercial: new FormControl()

    })
  }

  async onSubmit(){
    const token = localStorage.getItem('user_token');
    this.formulario.value.token = token;
    // const res = await this.cotizacionServices.register(this.formulario.value);
    const res = await this.cotizacionServices.editCotizaciones(this.formulario.value);
    console.log(res)
    this.router.navigate(['/cotizaciones'])
    console.log(this.formulario.value)
  }
  
}
