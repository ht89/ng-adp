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
    path: 'timeouts',
    loadChildren: './timeouts/timeouts.module#TimeoutsModule'
  },
  {
    path: 'circuit-breaker',
    loadChildren:
      './circuit-breaker/circuit-breaker.module#CircuitBreakerModule'
  }
];
/*
 * initialNavigation: enabled -> for one load page, without reload
 */
export const AppRoutes = RouterModule.forRoot(ROUTES, {
  initialNavigation: 'enabled'
});
