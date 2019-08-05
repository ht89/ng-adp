import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SingletonComponent } from './singleton.component';
import { ROUTES } from './singleton.routes';

@NgModule({
  imports: [ROUTES, FormsModule],
  exports: [SingletonComponent],
  declarations: [SingletonComponent],
  providers: []
})
export class SingletonModule {}
