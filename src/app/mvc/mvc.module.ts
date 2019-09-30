import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MvcComponent } from './mvc.component';
import { ROUTES } from './mvc.routes';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MvcComponent],
  imports: [ROUTES, CommonModule, FormsModule],
  exports: [MvcComponent]
})
export class MvcModule {}
