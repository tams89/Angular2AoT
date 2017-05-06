import { platformBrowser } from '@angular/platform-browser';
import { AppModuleNgFactory } from "./app/app.module.ngfactory";

console.log("Running AoT compiled.");
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory.AppModuleNgFactory);