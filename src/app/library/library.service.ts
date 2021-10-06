import { Injectable } from '@angular/core';
import { Book } from '../shared/book/book.model';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  allBooks: Book[] = [
    new Book('Title', 'author', 'genre', 'https://assets.entrepreneur.com/content/3x2/2000/20191219170611-GettyImages-1152794789.jpeg'),
    new Book('Title', 'author', 'genre', 'https://assets.entrepreneur.com/content/3x2/2000/20191219170611-GettyImages-1152794789.jpeg'),
    new Book('Title', 'author', 'genre', 'https://assets.entrepreneur.com/content/3x2/2000/20191219170611-GettyImages-1152794789.jpeg')
  ]
  constructor() { }

}
