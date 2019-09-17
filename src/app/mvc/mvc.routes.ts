import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MvcComponent } from './mvc.component';

const routes: Routes = [
  {
    path: '',
    component: MvcComponent
  }
];

export const ROUTES: ModuleWithProviders = RouterModule.forChild(routes);
