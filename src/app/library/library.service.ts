import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Book } from '../shared/book/book.model';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class LibraryService {
  allBooks: Book[] = [];
  constructor(private http: HttpClient) {}

  booksSubject = new Subject<Book[]>();

  fetchBooks(searchParams) {
    this.http
      .get(
        'http://openlibrary.org/search.json?q=' +
          searchParams.split(' ').join('+').toLowerCase()
      )
      .pipe(
        map((data: any) => {
          let myBooks = [];
          data.docs.map((book) => {
            const searchBook = new Book(
              book.title,
              book.author_name,
              '',
              'https://t3.ftcdn.net/jpg/01/38/48/40/360_F_138484065_1enzXuW8NlkppNxSv4hVUrYoeF8qgoeY.jpg'
            );
            myBooks.push(searchBook);
          });
          return myBooks;
        })
      )
      .subscribe((myBooks) => {
        this.allBooks = myBooks;
        this.booksSubject.next(this.allBooks.slice());
      });
  }
}
