import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class FestivosService {
  private baseUrl = 'https://localhost:7118/api/festivo';

  constructor(private http: HttpClient) {}

  agregarFestivo(festivo: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/agregar`, festivo);
  }

  obtenerFestivo(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/obtener/${id}`);
  }

  listarTodos(): Observable<any> {
    return this.http.get(`${this.baseUrl}/listar`);
  }

  buscarPorTipoYNombre(tipo: number, nombre: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/buscar/?tipo=${tipo}&nombre=${nombre}`);
  }

  validarFecha(dia: number, mes: number, anio: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/validar?dia=${dia}&mes=${mes}&anio=${anio}`);
  }

  actualizarFestivo(id: number, festivo: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/actualizar/${id}`, festivo);
  }

  eliminarFestivo(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/eliminar/${id}`);
  }
}
