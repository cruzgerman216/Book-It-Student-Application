import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/book/book.model';

@Component({
  selector: 'app-book-results',
  templateUrl: './book-results.component.html',
  styleUrls: ['./book-results.component.css']
})
export class BookResultsComponent implements OnInit {
  allBooks: Book[] = [
    new Book('Title', 'author', 'genre', 'https://assets.entrepreneur.com/content/3x2/2000/20191219170611-GettyImages-1152794789.jpeg'),
    new Book('Title', 'author', 'genre', 'https://assets.entrepreneur.com/content/3x2/2000/20191219170611-GettyImages-1152794789.jpeg'),
    new Book('Title', 'author', 'genre', 'https://assets.entrepreneur.com/content/3x2/2000/20191219170611-GettyImages-1152794789.jpeg')
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
