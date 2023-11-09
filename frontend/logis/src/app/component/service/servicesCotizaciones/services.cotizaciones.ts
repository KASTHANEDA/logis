import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CotizacionesService {
  private baseUrl = 'https://stackj-appli-czeuxjdc1k0i-1706506766.us-east-2.elb.amazonaws.com:8080/api/cotizaciones';
  private baseUrlCot = 'https://stackj-appli-czeuxjdc1k0i-1706506766.us-east-2.elb.amazonaws.com:8080/api/editCotizaciones';

  constructor(private httpClient: HttpClient) {}

  private getHttpOptions() {
    return {
      headers: new HttpHeaders({
        'autorizado': localStorage.getItem('user_token') || ''
      })
    };
  }

  getAll() {
    return firstValueFrom(this.httpClient.get<any[]>(this.baseUrl, this.getHttpOptions()));
  }

  addCotizacion(formValue: any) {
    return firstValueFrom(this.httpClient.post<any>(this.baseUrl, formValue, this.getHttpOptions()));
  }


  deleteCotizacion(cotizacionId: string) {
    return firstValueFrom(this.httpClient.delete<any>(`${this.baseUrl}/${cotizacionId}`, this.getHttpOptions()));
  }

  async editCotizaciones(cotizacionId: string){
    const token = localStorage.getItem('user_token');
    console.log(token)

    const httpOptions = {
      headers: new HttpHeaders({
        'autorizado':localStorage.getItem('user_token')!
      })
    }
    
    console.log(cotizacionId)

    await this.httpClient.get<any[]>(`${this.baseUrl}/${cotizacionId}`, httpOptions);
    // await  this.httpClient.get<any>(`${this.baseUrl}/${cotizacionId}`,httpOptions)
     
    
  }

  //constructor() { }
}
