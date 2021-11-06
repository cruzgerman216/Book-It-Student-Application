import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { BookshelfComponent } from './bookshelf/bookshelf.component';
import { BookDetailsComponent } from './bookshelf/book-details/book-details.component';
import { BookListComponent } from './bookshelf/book-list/book-list.component';
import { LibraryComponent } from './library/library.component';
import { BookSearchComponent } from './library/book-search/book-search.component';
import { BookResultsComponent } from './library/book-results/book-results.component';
import { BookComponent } from './shared/book/book.component';
import { DropdownDirective } from './shared/directives/dropdown.directive';
import { AppRoutingModule } from './app-routing.module';
import { BookshelfHomeComponent } from './bookshelf/bookshelf-home/bookshelf-home.component';
import { BookshelfEditComponent } from './bookshelf/bookshelf-edit/bookshelf-edit.component';
import { AuthComponent } from './auth/auth.component';
import { AuthInterceptorService } from './auth/auth-interceptor.service.';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    BookshelfComponent,
    BookDetailsComponent,
    BookListComponent,
    LibraryComponent,
    BookSearchComponent,
    BookResultsComponent,
    BookComponent,
    DropdownDirective,
    BookshelfHomeComponent,
    BookshelfEditComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}],
bootstrap: [AppComponent],
})
export class AppModule {}
