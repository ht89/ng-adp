import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CircuitBreakerComponent } from './circuit-breaker.component';

const routes: Routes = [
  {
    path: '',
    component: CircuitBreakerComponent
  }
];

export const ROUTES: ModuleWithProviders = RouterModule.forChild(routes);
