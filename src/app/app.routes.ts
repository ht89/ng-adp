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
  }
];
/*
 * initialNavigation: enabled -> for one load page, without reload
 */
export const AppRoutes = RouterModule.forRoot(ROUTES, {
  initialNavigation: 'enabled'
});
