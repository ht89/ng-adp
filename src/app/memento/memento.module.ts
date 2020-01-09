import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ROUTES } from './memento.routes';
import { MementoComponent } from './memento.component';

@NgModule({
  declarations: [MementoComponent],
  imports: [CommonModule, ROUTES],
  exports: [MementoComponent]
})
export class MementoModule {}
