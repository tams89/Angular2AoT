import { platformBrowserDynamic } from '@angular/platfor m-browser-dynamic';
import { AppModule } from './app/app.module';

console.log("Run JIT compiled.")
platformBrowserDynamic().bootstrapModule(AppModule);