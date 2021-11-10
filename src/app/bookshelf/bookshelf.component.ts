import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertComponent } from '../shared/alert/alert.component';
import { AlertplaceholderDirective } from '../shared/alertplaceholder.directive';
import { Book } from '../shared/book/book.model';
import { BookshelfService } from './bookshelf.service';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.css'],
})
export class BookshelfComponent implements OnInit, OnDestroy {
  @ViewChild(AlertplaceholderDirective, { static: true })
  alertHost: AlertplaceholderDirective;
  sub: Subscription;
  constructor(private bookshelfService: BookshelfService) {}

  ngOnInit(): void {
    this.sub = this.bookshelfService.bookSelected.subscribe((book) => {
      let componentRef =
        this.alertHost.viewcontainerRef.createComponent(AlertComponent);
      componentRef.instance.message =
        'You removed ' + book.title + ' by ' + book.author;
      setTimeout(() => {
        this.alertHost.viewcontainerRef.clear();
      }, 4000);
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe;
  }
}
