import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CircuitBreakerComponent } from './circuit-breaker.component';
import { ROUTES } from './circuit-breaker.routes';



@NgModule({
  declarations: [CircuitBreakerComponent],
  imports: [
    ROUTES,
    CommonModule
  ],
  exports: [CircuitBreakerComponent]
})
export class CircuitBreakerModule { }
