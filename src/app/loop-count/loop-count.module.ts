import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoopCountComponent } from './loop-count.component';
import { ROUTES } from './loop-count.routes';

@NgModule({
  declarations: [LoopCountComponent],
  imports: [CommonModule, ROUTES],
  exports: [LoopCountComponent]
})
export class LoopCountModule {}
