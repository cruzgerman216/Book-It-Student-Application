import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input('inputBook') book;
  @Output() selectedBook = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.book);
  }

  onSelectBook(){
    this.selectedBook.emit();
  }

}
