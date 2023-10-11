import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CotizacionesService {
  private baseUrl = 'http://localhost:9100/api/cotizaciones';

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
}
