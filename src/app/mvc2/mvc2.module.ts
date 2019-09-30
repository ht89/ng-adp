import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mvc2Component } from './mvc2.component';
import { ROUTES } from './mvc2.routes';

@NgModule({
  declarations: [Mvc2Component],
  imports: [CommonModule, ROUTES],
  exports: [Mvc2Component]
})
export class Mvc2Module {}
