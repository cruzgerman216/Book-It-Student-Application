import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Book } from '../shared/book/book.model';

@Injectable({ providedIn: 'root' })
export class BookshelfService {
  private myBooks: Book[] = [
    new Book(
      'It',
      'Stephen King',
      'Horror',
      'https://m.media-amazon.com/images/M/MV5BYjg1YTRkNzQtODgyYi00MTQ5LThiMDYtNDJjMWRjNTdjZDZlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg',
       9.99
      ),
    new Book(
      'Harry Potter: The socerers Stone',
      'J K Rowling',
      'Adventure',
      'https://media.contentapi.ea.com/content/dam/gin/images/2017/01/harry-potter-sorcerors-stone-key-art.jpg.adapt.crop3x5.533p.jpg',
      10.99
      ),
    new Book(
      'Cracking the Coding Interview',
      'Gayle Laakaan McDowell',
      'Info',
      'https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SX348_BO1,204,203,200_.jpg',
      29.99
    ),
  ];

  bookSubject = new Subject<Book[]>();

  saveBook(book: Book) {
    this.myBooks.push(book);
    this.bookSubject.next(this.myBooks.slice())
  }

  removeBook(i: number) {
    this.myBooks.splice(i, 1);
    this.bookSubject.next(this.myBooks.slice())
  }
  
  getBook(index: number) {
    return this.myBooks[index];
  }

  updateBook(book:Book, index:number){
    this.myBooks[index] = book;
    this.bookSubject.next(this.myBooks.slice())
  }

  getBooks(){
    return this.myBooks.slice();
  }
}
