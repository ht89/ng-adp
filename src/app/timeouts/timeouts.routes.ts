import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimeoutsComponent } from './timeouts.component';

const routes: Routes = [
  {
    path: '',
    component: TimeoutsComponent
  }
];

export const ROUTES: ModuleWithProviders = RouterModule.forChild(routes);
