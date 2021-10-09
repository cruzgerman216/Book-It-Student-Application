import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-bookshelf-edit',
  templateUrl: './bookshelf-edit.component.html',
  styleUrls: ['./bookshelf-edit.component.css']
})
export class BookshelfEditComponent implements OnInit {
  isEditMode = false;
  //localhost:4200/bookshelf/0/edit
  // if we have an id path
  // set iseditmode to true
  // otherwise false 
  //localhost:4200/bookshelf/new
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      params['id'] ? this.isEditMode = true : this.isEditMode = false
    })
  }

}
