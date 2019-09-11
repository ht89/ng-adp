import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PromisesComponent } from './promises.component';

const routes: Routes = [
  {
    path: '',
    component: PromisesComponent
  }
];

export const ROUTES: ModuleWithProviders = RouterModule.forChild(routes);
