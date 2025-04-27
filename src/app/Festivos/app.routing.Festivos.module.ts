import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppTipoComponent } from '../Tipo/app.Tipo.component';

const routes: Routes = [
  { path: 'tipo', component: AppTipoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }