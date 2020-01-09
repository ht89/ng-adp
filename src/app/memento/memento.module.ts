import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ROUTES } from './memento.routes';
import { MementoComponent } from './memento.component';
import { IMDBAPIService } from '../promises/imdb-api.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MementoComponent],
  imports: [CommonModule, ROUTES, FormsModule],
  exports: [MementoComponent],
  providers: [IMDBAPIService]
})
export class MementoModule {}
