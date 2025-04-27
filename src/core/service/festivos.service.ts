import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { ClsFestivo } from '../../shared/entidades/ClsFestivo';
import { environment } from '../../environments/environment';

@Injectable()
export class FestivosService {
  private baseUrl = environment.baseUrl + '/festivos'; // URL base de la API

  
  constructor(private http: HttpClient) {}

  private todosFestivos = new BehaviorSubject(<ClsFestivo[]>[]);
  listaFestivos$ = this.todosFestivos.asObservable();


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

  validarFecha(dia: number, mes: number, anio: number): Observable<ClsFestivo[]> {
    return this.http.get<ClsFestivo[]>(`${this.baseUrl}/validar?dia=${dia}&mes=${mes}&anio=${anio}`).pipe(
      tap(festivos => this.todosFestivos.next(festivos) )
    );
  }

  actualizarFestivo(id: number, festivo: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/actualizar/${id}`, festivo);
  }

  eliminarFestivo(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/eliminar/${id}`);
  }

  validarFechaCompleta(fecha: Date): Observable<any> {
    const fechaStr = fecha.toISOString(); //fecha en formato (año-mes-dia)
    return this.http.get(`${this.baseUrl}/validar?fecha=${fechaStr}`);
  }
}
