import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Book } from 'src/app/shared/book/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  myBooks: Book[] = [
    new Book('Title', 'author', 'genre', 'https://assets.entrepreneur.com/content/3x2/2000/20191219170611-GettyImages-1152794789.jpeg'),
    new Book('Title2', 'author2', 'genre2', 'https://assets.entrepreneur.com/content/3x2/2000/20191219170611-GettyImages-1152794789.jpeg'),
    new Book('Title3', 'author3', 'genre3', 'https://assets.entrepreneur.com/content/3x2/2000/20191219170611-GettyImages-1152794789.jpeg')
  ]
  @Output() bookWasSelected = new EventEmitter<Book>();
  constructor() { }

  ngOnInit(): void {
  }

  onBookSelected(book:Book){
    console.log(book);
    this.bookWasSelected.emit(book);
  }

}
