import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeoutsComponent } from './timeouts.component';
import { ROUTES } from './timeouts.routes';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';



@NgModule({
  declarations: [TimeoutsComponent],
  imports: [
    ROUTES,
    CommonModule,
    HttpClientModule
  ],
  exports: [TimeoutsComponent],
  providers: [ApiService]
})
export class TimeoutsModule { }
