import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MementoComponent } from './memento.component';

const routes: Routes = [
  {
    path: '',
    component: MementoComponent
  }
];

export const ROUTES: ModuleWithProviders = RouterModule.forChild(routes);
