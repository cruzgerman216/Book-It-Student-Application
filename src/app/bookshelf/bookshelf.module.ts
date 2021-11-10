import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookshelfComponent } from './bookshelf.component';
import { BookshelfEditComponent } from './bookshelf-edit/bookshelf-edit.component';
import { BookshelfHomeComponent } from './bookshelf-home/bookshelf-home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BookshelfRoutingModule } from './bookshelf-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    BookshelfComponent,
    BookDetailsComponent,
    BookListComponent,
    BookshelfHomeComponent,
    BookshelfEditComponent,
  ],
  imports: [SharedModule, CommonModule, ReactiveFormsModule, BookshelfRoutingModule],
  exports: [
    BookshelfComponent,
    BookDetailsComponent,
    BookListComponent,
    BookshelfHomeComponent,
    BookshelfEditComponent,
  ],
})
export class BookshelfModule {}
