import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Mvc2Component } from './mvc2.component';

const routes: Routes = [
  {
    path: '',
    component: Mvc2Component
  }
];

export const ROUTES: ModuleWithProviders = RouterModule.forChild(routes);
