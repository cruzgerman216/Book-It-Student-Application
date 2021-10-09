import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './bookshelf/book-details/book-details.component';
import { BookshelfEditComponent } from './bookshelf/bookshelf-edit/bookshelf-edit.component';
import { BookshelfHomeComponent } from './bookshelf/bookshelf-home/bookshelf-home.component';
import { BookshelfComponent } from './bookshelf/bookshelf.component';
import { LibraryComponent } from './library/library.component';

const routes: Routes = [
    //localhost:4200 -> redirect to localhost:4200/bookshelf
    {
        path: '',  redirectTo: 'bookshelf', pathMatch:'full'
    },
    //localhost:4200/bookshelf/
    {
        path: 'bookshelf', component: BookshelfComponent, 
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
                path: ':id', component: BookDetailsComponent
            },
            //localhost:4200/bookshelf/:id/edit,
            {
                path:':id/edit', component: BookshelfEditComponent
            }

        ]
    },
    //localhost:4200/library
    {
        path: 'library', component: LibraryComponent
    },
    //localhost:4200/pagedoesnotexist
    {
        path: '**', redirectTo: 'bookshelf'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }