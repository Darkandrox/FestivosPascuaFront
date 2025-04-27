import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/Festivos/app.Festivos.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));