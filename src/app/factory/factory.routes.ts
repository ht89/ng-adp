import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FactoryComponent } from './factory.component';

const routes: Routes = [
  {
    path: '',
    component: FactoryComponent
  }
];

export const ROUTES: ModuleWithProviders = RouterModule.forChild(routes);
