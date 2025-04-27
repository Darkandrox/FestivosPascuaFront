import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppFestivosComponent } from '../Festivos/app.Festivos.component';

const routes: Routes = [
  { path: 'festivos', component: AppFestivosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

