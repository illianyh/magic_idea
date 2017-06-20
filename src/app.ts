//our root app component
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, BaseRequestOptions, Http } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MockBackend } from '@angular/http/testing';
import { RestangularModule, RestangularHttp, Restangular } from 'ng2-restangular';

import { App } from './app.component.ts';
import { routes } from './app.routes.ts';
import { HeroAppModule } from './heroapp/heroApp.module.ts';

@NgModule({
  declarations: [App],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    HeroAppModule,
    RestangularModule.forRoot((RestangularProvider) => {
      //RestangularProvider.setBaseUrl('http://hero-backend.2muchcoffee.com/api/');
      RestangularProvider.setBaseUrl('http://http://api-hub.mymagic.my/v1/');
      RestangularProvider.setRestangularFields({
        id: "_id"
      });
    }),
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule {}




