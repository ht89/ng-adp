import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ROUTES } from './factory.routes';
import { FactoryComponent } from './factory.component';

@NgModule({
  imports: [ROUTES, FormsModule],
  exports: [FactoryComponent],
  declarations: [FactoryComponent],
  providers: []
})
export class FactoryModule {}
