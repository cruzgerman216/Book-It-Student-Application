import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Book } from '../shared/book/book.model';
import { DataStorageService } from '../shared/data-storage/data-storage.service';
import { BookshelfService } from './bookshelf.service';

@Injectable({ providedIn: 'root' })
export class BooksResolverService implements Resolve<Book[]> {
  constructor(
    private dataStorageService: DataStorageService,
    private bookshelfService: BookshelfService
  ) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Book[] | Observable<any> | Promise<Book[]> {
    const books = this.bookshelfService.getBooks();
    if (books.length == 0) {
      return this.dataStorageService.fetchBooks();
    }
    return books;
  }
}
