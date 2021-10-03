import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  @Input('inputSelectedBook') selectedBook: string;

  constructor() { }

  ngOnInit(): void {
  }

}
