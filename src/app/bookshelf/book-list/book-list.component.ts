import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Book } from 'src/app/shared/book/book.model';
import { BookshelfService } from '../bookshelf.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit, OnDestroy {
  myBooks: Book[] = []
  sub:Subscription
  constructor(private bookshelfService:BookshelfService) { }

  ngOnInit(): void {
    this.myBooks = this.bookshelfService.getBooks();
    this.sub = this.bookshelfService.bookSubject.subscribe(books=>{
      this.myBooks = books;
    })
  }

  onRemoveBook(i:number){
    this.bookshelfService.removeBook(i);
  }
  
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
