import { HttpClient, HttpParams } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { exhaustMap, take, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';
import { BookshelfService } from 'src/app/bookshelf/bookshelf.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private bookshelfService: BookshelfService,
    private authService: AuthService
  ) {}

  storeBooks() {
    const books = this.bookshelfService.getBooks();
    this.http
      .put(
        'https://book-it-8c112-default-rtdb.firebaseio.com/books.json',
        books
      )
      .subscribe((respData) => {
        console.log(respData);
      });
  }
  Ïƒ;
  fetchBooks() {
    return this.http
      .get('https://book-it-8c112-default-rtdb.firebaseio.com/books.json')
      .pipe(
        tap((books) => {
          this.bookshelfService.nextBooks(books);
        })
      );
  }
}
