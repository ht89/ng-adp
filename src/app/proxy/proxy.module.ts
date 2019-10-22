import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProxyComponent } from './proxy.component';
import { ROUTES } from './proxy.routes';

@NgModule({
  declarations: [ProxyComponent],
  imports: [CommonModule, ROUTES],
  exports: [ProxyComponent]
})
export class ProxyModule {}
