import { Routes } from '@angular/router';
import { App } from './app.component.ts';
import { heroAppRoutes } from './heroapp/heroApp.routes.ts';

export const routes: Routes = [
  {
    path: '',
    children: heroAppRoutes
  }
];

