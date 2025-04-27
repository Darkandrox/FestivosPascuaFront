import { Component, OnInit } from '@angular/core';
import { TipoService } from '../../core/service/tipo.service';
import { Observable, map } from 'rxjs';
import { ClsTipo } from '../../shared/entidades/ClsTipo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.Tipo.component.html',
  styleUrls: ['./app.Tipo.component.css'],
})
export class AppTipoComponent implements OnInit {
  tipo: ClsTipo = {
    id: 0,
    nombre: ''
  };

  tipoConsultado: any;
  tiposListados$: Observable<ClsTipo[]> = this.tipoService.listaTipos$;
  idConsulta: number = 0;
  idModificar: number = 0;
  idEliminar: number = 0;
  lenght$ = this.tiposListados$.pipe(map(tipos => tipos.length));
url: any;

  constructor(private tipoService: TipoService, private route: Router) {}

  ngOnInit() {
    this.tipoService.listarTodos().subscribe();
  }

  agregarTipo() {
    this.tipoService.agregarTipo(this.tipo).subscribe(() => {
      alert('Tipo agregado');
    });
  }

  consultarTipoPorId() {
    this.tipoService.obtenerTipoPorId(this.idConsulta).subscribe(data => {
      this.tipoConsultado = data;
    });
  }

  listarTipos() {
    this.tipoService.listarTodos().subscribe();
  }

  actualizarTipo() {
    this.tipo.id = this.idModificar;
    this.tipoService.actualizarTipo(this.idModificar, this.tipo).subscribe(() => {
      alert('Tipo actualizado');
    });
  }

  eliminarTipo() {
    this.tipoService.eliminarTipo(this.idEliminar).subscribe(() => {
      alert('Tipo eliminado');
    });
  }

  irPaginaFestivo(url: string): void {
    this.route.navigate([url]);
  }
}
