"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var app_module_ngfactory_1 = require("./app/app.module.ngfactory");
console.log("Running AoT compiled.");
platform_browser_1.platformBrowser().bootstrapModuleFactory(app_module_ngfactory_1.AppModuleNgFactory);
//# sourceMappingURL=mainAot.js.map