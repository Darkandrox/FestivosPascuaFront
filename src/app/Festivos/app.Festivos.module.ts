import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppFestivosComponent } from './app.Festivos.component';
import { FestivosService } from '../../core/service/festivos.service';

@NgModule({
  declarations: [AppFestivosComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [FestivosService],
  bootstrap: [AppFestivosComponent],
})
export class AppModule {}
