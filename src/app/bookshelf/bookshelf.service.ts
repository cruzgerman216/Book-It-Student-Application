import { EventEmitter, Injectable } from "@angular/core";
import { Book } from "../shared/book/book.model";

@Injectable({providedIn: 'root'})
export class BookshelfService{
    myBooks: Book[] = [
        new Book('Title', 'author', 'genre', 'https://assets.entrepreneur.com/content/3x2/2000/20191219170611-GettyImages-1152794789.jpeg'),
        new Book('Title2', 'author2', 'genre2', 'https://assets.entrepreneur.com/content/3x2/2000/20191219170611-GettyImages-1152794789.jpeg'),
        new Book('Title3', 'author3', 'genre3', 'https://assets.entrepreneur.com/content/3x2/2000/20191219170611-GettyImages-1152794789.jpeg')
      ]
   bookWasSelected = new EventEmitter<Book>();

   saveBook(book:Book){
     this.myBooks.push(book);
   }

   removeBook(index:number){
     this.myBooks.splice(index,1)
   }
}