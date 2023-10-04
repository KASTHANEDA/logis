import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/layout/login/login.component';
import { RegisterComponent } from './component/layout/register/register.component';
import { NavbarComponent } from './component/layout/navbar/navbar.component';
import { ServiciosComponent } from './component/layout/servicios/servicios.component';
import { SomosComponent } from './component/layout/somos/somos.component';
import { CarrusellComponent } from './component/layout/carrusell/carrusell.component';
import { CotizacionesComponent } from './component/layout/cotizaciones/cotizaciones.component';
import { loginGuard } from './component/guards/login.guard';
import { ServicesDetailsComponent } from './component/layout/servicios/services-details/services-details.component';
import { AddCotizacionesComponent } from './component/layout/cotizaciones/add-cotizaciones/add-cotizaciones.component';
import { PricingComponent } from './component/layout/pricing/pricing.component';
import { ContactenosComponent } from './component/layout/contactenos/contactenos.component';


const routes: Routes = [
  {    path: 'login',    component: LoginComponent,  },
  {    path: 'register',    component: RegisterComponent,  }, 
  {    path: 'navbar',    component: NavbarComponent,  },
  {    path: 'servicios',    component: ServiciosComponent,  },   
   {    path: 'ServiciosDetails', component: ServicesDetailsComponent }, 
   {    path: 'pricing', component: PricingComponent  },
  {    path: 'somos', component: SomosComponent  },
  {    path: 'inicio', component: CarrusellComponent  },
  {    path: 'contactenos', component: ContactenosComponent  },
  {    path: 'cotizaciones', component: CotizacionesComponent ,canActivate:[loginGuard] },
   {    path: 'AddCotizaciones', component: AddCotizacionesComponent ,canActivate:[loginGuard] },
  {    path: '', component: CarrusellComponent  },
  {    path: '**', component: CarrusellComponent  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
