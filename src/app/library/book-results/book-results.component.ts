import { Component, OnInit } from '@angular/core';
import { BookshelfService } from 'src/app/bookshelf/bookshelf.service';
import { Book } from 'src/app/shared/book/book.model';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-book-results',
  templateUrl: './book-results.component.html',
  styleUrls: ['./book-results.component.css']
})
export class BookResultsComponent implements OnInit {
  allBooks: Book[] = []
  alert:string = null;
  constructor(private libraryService: LibraryService, private bookshelfService: BookshelfService) { }

  ngOnInit(): void {
    this.allBooks = this.libraryService.allBooks;
    this.libraryService.booksSubject.subscribe(books=>{
      this.allBooks = books;
    })
  }

  onSaveBook(book: Book) {
    this.bookshelfService.saveBook(book);
    this.alert = "You saved " + book.title + " by " + book.author;
    setTimeout(()=>{
      this.alert = null
    }, 4000)
  }

  
}
