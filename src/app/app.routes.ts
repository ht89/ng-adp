import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const ROUTES: Routes = [
  { path: '', redirectTo: 'singleton', pathMatch: 'full' },
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'singleton',
    loadChildren: './singleton/singleton.module#SingletonModule'
  },
  {
    path: 'factory',
    loadChildren: './factory/factory.module#FactoryModule'
  },
  {
    path: 'promises',
    loadChildren: './promises/promises.module#PromisesModule'
  },
  {
    path: 'mvc',
    loadChildren: './mvc/mvc.module#MvcModule'
  },
  {
    path: 'mvc2',
    loadChildren: './mvc2/mvc2.module#Mvc2Module'
  }
];
/*
 * initialNavigation: enabled -> for one load page, without reload
 */
export const AppRoutes = RouterModule.forRoot(ROUTES, {
  initialNavigation: 'enabled'
});
