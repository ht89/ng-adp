import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProxyComponent } from './proxy.component';

const routes: Routes = [
  {
    path: '',
    component: ProxyComponent
  }
];

export const ROUTES: ModuleWithProviders = RouterModule.forChild(routes);
