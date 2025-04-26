import { Component } from '@angular/core';
import { FestivosService } from './festivos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  festivo = {
    id: 0,
    nombre: '',
    dia: 0,
    mes: 0,
    diasPascuas: 0,
    idTipo: 0,
    tipo: {
      id: 0,
      nombre: ''
    }
  };

  festivoConsultado: any;
  todosFestivos: any[] = [];
  festivosFiltrados: any[] = [];

  idConsulta: number = 0;
  tipoBusqueda: number = 0;
  nombreBusqueda: string = '';
  idModificar: number = 0;
  idEliminar: number = 0;

  constructor(private festivosService: FestivosService) {}

  agregar() {
    this.festivosService.agregarFestivo(this.festivo).subscribe(() => {
      alert('Festivo agregado');
    });
  }

  consultar() {
    this.festivosService.obtenerFestivo(this.idConsulta).subscribe(data => {
      this.festivoConsultado = data;
    });
  }

  listarTodos() {
    this.festivosService.listarTodos().subscribe(data => {
      this.todosFestivos = data;
    });
  }

  buscarPorTipoYNombre() {
    this.festivosService.buscarPorTipoYNombre(this.tipoBusqueda, this.nombreBusqueda)
      .subscribe(data => {
        this.festivosFiltrados = data;
      });
  }

  actualizarFestivo() {
    this.festivo.id = this.idModificar;
    this.festivosService.actualizarFestivo(this.idModificar, this.festivo).subscribe(() => {
      alert('Festivo actualizado');
    });
  }

  eliminarFestivo() {
    this.festivosService.eliminarFestivo(this.idEliminar).subscribe(() => {
      alert('Festivo eliminado');
    });
  }
}
