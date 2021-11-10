import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { AlertplaceholderDirective } from './alertplaceholder.directive';
import { BookComponent } from './book/book.component';
import { DropdownDirective } from './directives/dropdown.directive';

@NgModule({
  declarations: [
    BookComponent,
    DropdownDirective,
    AlertComponent,
    AlertplaceholderDirective,
  ],
  imports: [CommonModule],
  exports: [
    BookComponent,
    DropdownDirective,
    AlertComponent,
    AlertplaceholderDirective,
  ],
})
export class SharedModule {}
