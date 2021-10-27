import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BookshelfService } from '../bookshelf.service';

@Component({
  selector: 'app-bookshelf-edit',
  templateUrl: './bookshelf-edit.component.html',
  styleUrls: ['./bookshelf-edit.component.css'],
})
export class BookshelfEditComponent implements OnInit {
  isEditMode = false;
  bookForm: FormGroup;
  // bookForm.value.coverImagePath
  id: number;
  constructor(
    private route: ActivatedRoute,
    private bookshelfService: BookshelfService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      params['id'] ? (this.isEditMode = true) : (this.isEditMode = false);
      this.id = +params['id'];
    });

    this.formInit();
  }

  formInit() {
    // iseditmode is true -> add the values to the form already
    // iseditmode is false -> make the form empty
    let title = '';
    let author = '';
    let genre = '';
    let coverImagePath = '';
    let price = 0;
    if (this.isEditMode) {
      // i need the id of the book [x]
      // get the book from bookshelfService
      let book = this.bookshelfService.getBook(this.id)
      title = book.title;
      author = book.author;
      genre = book.genre;
      coverImagePath = book.coverImagePath;
      price = book.price;
      console.log(book)
    }
      // add the values to the form
    this.bookForm = new FormGroup({
      title: new FormControl(title, [Validators.required]),
      author: new FormControl(author, [Validators.required]),
      genre: new FormControl(genre, [Validators.required]),
      coverImagePath: new FormControl(coverImagePath, [Validators.required]),
      price: new FormControl(price, [Validators.required]),
    })
  }

  onSubmit(){
    // editmode is true -> update the book -> bookshelfService
    // editmode is false -> add the book -> bookshelfService

    if(this.isEditMode){
      // call a method from our bookshelfService
      // that updates the book
      this.bookshelfService.updateBook(this.bookForm.value, this.id)
    }else{
      this.bookshelfService.saveBook(this.bookForm.value)
    }
  }

  onCancel(){
    // localhost:4200/bookshelf
    this.router.navigate(['/bookshelf'])
  }
}

// todo list
// add property called price to the book model [x]
// create a form that corresponds with the book model [x]
// Configure the form in our typescript file (reactive approach) [x]
// Finish the submit button and its method [X]
// create a cancel method and incorporate event binding [X]
