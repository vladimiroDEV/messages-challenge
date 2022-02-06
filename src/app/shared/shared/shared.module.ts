import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadMoreComponent } from '../components/read-more/read-more.component';
import { MiddledotDatePipe } from '../pipes/middledot-datepipe';

@NgModule({
  declarations: [ReadMoreComponent, MiddledotDatePipe],
  imports: [CommonModule],
  exports: [ReadMoreComponent, MiddledotDatePipe],
})
export class SharedModule {}
