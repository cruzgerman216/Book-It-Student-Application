import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BookshelfService } from 'src/app/bookshelf/bookshelf.service';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input('inputBook') book;

  constructor(private bookshelfService: BookshelfService) { }

  ngOnInit(): void {
    console.log(this.book);
  }

  onSelectBook(){
    this.bookshelfService.bookWasSelected.emit(this.book);
  }

}
