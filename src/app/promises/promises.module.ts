import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromisesComponent } from './promises.component';
import { ROUTES } from './promises.routes';

@NgModule({
  declarations: [PromisesComponent],
  imports: [ROUTES, CommonModule]
})
export class PromisesModule {}
