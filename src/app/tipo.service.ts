import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TiposService {
  private baseUrl = 'https://localhost:7118/api/tipos';

  constructor(private http: HttpClient) {}

  listarTodos(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  obtenerTipo(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/obtener/${id}`);
  }

  agregarTipo(tipo: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/agregar`, tipo);
  }

  modificarTipo(id: number, tipo: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/modificar/${id}`, tipo);
  }

  eliminarTipo(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/eliminar/${id}`);
  }
}