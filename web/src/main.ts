import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { APP_ROUTER_PROVIDERS } from './app/app.routes';
import { HTTP_PROVIDERS } from '@angular/http';
import { AdalService } from 'angular2-adal/core';
import { AdalConfigurationService } from './app/adal/adal-configuration.service';
import { AUTH_PROVIDERS } from 'angular2-jwt';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  APP_ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  AdalService,
  AdalConfigurationService,
  AUTH_PROVIDERS
]);
