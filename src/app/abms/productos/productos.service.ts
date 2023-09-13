import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private apiUrl = 'https://interneg.ddns.net/api-challenge'; 

  constructor(private http: HttpClient) { }

  getListadoProductos(searchString?: string, orderByColumn?: string, orderByDirection?: string, page?: number, itemsPerPage?: number): Observable<any> {
    const token = localStorage.getItem('access_token');
    let params = new HttpParams();
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token
    });

    if (searchString) {
      params = params.set('search', searchString);
    }
    if (orderByColumn && orderByDirection) {
      params = params.set('order_by_column', orderByColumn);
      params = params.set('order_by_direction', orderByDirection);
    }
    if (page) {
      params = params.set('page', page.toString());
    }
    if (itemsPerPage) {
      params = params.set('take', itemsPerPage.toString());
    }
    if (searchString) {
      params = params.set('search', searchString);
    }

    return this.http.get(`${this.apiUrl}/productos`, { params, headers }).pipe(
      tap(data => console.log('Datos de productos recibidos:', data))
    );
  }

  crearProducto(productoData: any): Observable<any> {
    const token = localStorage.getItem('access_token');
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/json'
    });

    return this.http.post(`${this.apiUrl}/productos`, productoData, { headers });
  }
  eliminarProducto(productoId: number): Observable<any>{
    const token = localStorage.getItem('access_token');
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token
    });
    return this.http.post(`${this.apiUrl}/productos/eliminar`,  { id: productoId }, { headers }).pipe(
      tap(data => console.log('Producto eliminado:', data))
    );

  }
}
