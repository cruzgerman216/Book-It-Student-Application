import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Book } from '../shared/book/book.model';

@Injectable({ providedIn: 'root' })
export class BookshelfService {
  private myBooks: Book[] = [];

  bookSubject = new Subject<Book[]>();

  saveBook(book: Book) {
    this.myBooks.push(book);
    this.bookSubject.next(this.myBooks.slice());
  }

  removeBook(i: number) {
    this.myBooks.splice(i, 1);
    this.bookSubject.next(this.myBooks.slice());
  }

  getBook(index: number) {
    return this.myBooks[index];
  }

  updateBook(book: Book, index: number) {
    this.myBooks[index] = book;
    this.bookSubject.next(this.myBooks.slice());
  }

  getBooks() {
    return this.myBooks.slice();
  }
  nextBooks(books: any) {
    this.myBooks = books;
    this.bookSubject.next(books);
  }
}
