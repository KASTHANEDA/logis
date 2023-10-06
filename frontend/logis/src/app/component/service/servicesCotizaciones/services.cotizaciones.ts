
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable,inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class cotizacionesServices {
  
  httpClient = inject(HttpClient);
  baseUrl = 'http://localhost:9100/api/cotizaciones'
  UrlCot = 'http://localhost:9100/api'
 

  getAll(){
    const httpOptions = {
      headers: new HttpHeaders({
        'autorizado':localStorage.getItem('user_token')!
      })
    }
    return firstValueFrom(
      this.httpClient.get<any[]>(this.baseUrl,httpOptions)
    );
  }

  AddCotizaciones(formValue:any){
    const token = localStorage.getItem('user_token');
    console.log(token)

    const httpOptions = {
      headers: new HttpHeaders({
        'autorizado':localStorage.getItem('user_token')!
      })
    }
    
    console.log(formValue)

    return firstValueFrom( 
      this.httpClient.post<any>(`${this.baseUrl}`,formValue,httpOptions)
     

    )
    
  }

  DelCotizaciones(formValue:any){
    const token = localStorage.getItem('user_token');
    console.log(token)

    const httpOptions = {
      headers: new HttpHeaders({
        'autorizado':localStorage.getItem('user_token')!
      })
    }
    
    console.log('holi2')

    return firstValueFrom( 
      this.httpClient.delete<any>(`${this.baseUrl}/id`,formValue)
     
    )
    
  }

  //constructor() { }
}
