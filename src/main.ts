import 'core-js/es6';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { AppModule } from './app/app.module';

if (ENV === 'production') {
	enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
