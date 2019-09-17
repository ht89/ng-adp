import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MvcComponent } from './mvc.component';
import { ROUTES } from './mvc.routes';

@NgModule({
  declarations: [MvcComponent],
  imports: [ROUTES, CommonModule],
  exports: [MvcComponent]
})
export class MvcModule {}
