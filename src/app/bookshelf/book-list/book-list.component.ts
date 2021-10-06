import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Book } from 'src/app/shared/book/book.model';
import { BookshelfService } from '../bookshelf.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  myBooks: Book[] = []
  constructor(private bookshelfService:BookshelfService) { }

  ngOnInit(): void {
    this.myBooks = this.bookshelfService.myBooks;
  }
  onSelectBook(book:Book){
    this.bookshelfService.bookWasSelected.emit(book);
  }
  onRemoveBook(i:number){
    this.bookshelfService.removeBook(i)
  }
}
