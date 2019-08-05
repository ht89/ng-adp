import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingletonComponent } from './singleton.component';

const routes: Routes = [
  {
    path: '',
    component: SingletonComponent
  }
];

export const ROUTES: ModuleWithProviders = RouterModule.forChild(routes);
