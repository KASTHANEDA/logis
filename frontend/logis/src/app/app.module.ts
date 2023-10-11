import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/layout/navbar/navbar.component';
import { ContactenosComponent } from './component/layout/contactenos/contactenos.component';
import { CarrusellComponent } from './component/layout/carrusell/carrusell.component';
import { AppRoutingModule } from './app-routing.module';
import { CotizacionesComponent } from './component/layout/cotizaciones/cotizaciones.component';
import { FooterComponent } from './component/layout/footer/footer.component';

import { LoginComponent } from './component/layout/login/login.component';
import { RegisterComponent } from './component/layout/register/register.component';
import { ServiciosComponent } from './component/layout/servicios/servicios.component';
import { SomosComponent } from './component/layout/somos/somos.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ServicesDetailsComponent } from './component/layout/servicios/services-details/services-details.component';
import { AddCotizacionesComponent } from './component/layout/cotizaciones/add-cotizaciones/add-cotizaciones.component';
import { PricingComponent } from './component/layout/pricing/pricing.component';
import { EditCotizacionesComponent } from './component/layout/cotizaciones/edit-cotizaciones/edit-cotizaciones.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarrusellComponent,
    ContactenosComponent,    
    CotizacionesComponent,
    FooterComponent,
    
    LoginComponent,
    RegisterComponent,
    ServiciosComponent,
    SomosComponent,
    ServicesDetailsComponent,
    AddCotizacionesComponent,
    PricingComponent,
    EditCotizacionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,ReactiveFormsModule,RouterModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
