import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoopCountComponent } from './loop-count.component';

const routes: Routes = [
  {
    path: '',
    component: LoopCountComponent
  }
];

export const ROUTES: ModuleWithProviders = RouterModule.forChild(routes);
