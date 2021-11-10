import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth-guard.service';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BooksResolverService } from './books-resolvers.service';
import { BookshelfEditComponent } from './bookshelf-edit/bookshelf-edit.component';
import { BookshelfHomeComponent } from './bookshelf-home/bookshelf-home.component';
import { BookshelfComponent } from './bookshelf.component';
const routes: Routes = [

    {
        path: 'bookshelf', component: BookshelfComponent, 
        canActivate: [AuthGuard],
        children: [
            //localhost:4200/bookshelf
            {
                path: '', component: BookshelfHomeComponent, pathMatch:'full'
            },
            //localhost:4200/bookshelf/new
            {
                path: 'new', component: BookshelfEditComponent
            },
            //localhost:4200/bookshelf/:id
            {
                path: ':id', component: BookDetailsComponent, resolve: [BooksResolverService]
            },
            //localhost:4200/bookshelf/:id/edit,
            {
                path:':id/edit', component: BookshelfEditComponent, resolve: [BooksResolverService]
            }

        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookshelfRoutingModule { }