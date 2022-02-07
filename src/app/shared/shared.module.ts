import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReadMoreComponent } from './components/read-more/read-more.component';
import { MiddledotDatePipe } from './pipes/middledot-datepipe';
import { ReactiveFormsModule } from '@angular/forms';
import { StorageService } from './services/storage.service';

@NgModule({
  declarations: [ReadMoreComponent, MiddledotDatePipe],
  imports: [CommonModule, ReactiveFormsModule],

  exports: [ReadMoreComponent, MiddledotDatePipe, ReactiveFormsModule],
  providers: [StorageService],
})
export class SharedModule {}
