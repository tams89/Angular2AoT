import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

console.log("Run JIT compiled.");
platformBrowserDynamic().bootstrapModule(AppModule);