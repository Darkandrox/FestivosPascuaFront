import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppTipoComponent } from './app.Tipo.component';
import { TipoService } from '../../core/service/tipo.service';

@NgModule({
  declarations: [AppTipoComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [TipoService],
  bootstrap: [AppTipoComponent],
})
export class AppModule {}
