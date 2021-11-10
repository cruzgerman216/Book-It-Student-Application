import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth-guard.service';
import { AuthComponent } from './auth/auth.component';
import { BookDetailsComponent } from './bookshelf/book-details/book-details.component';
import { BooksResolverService } from './bookshelf/books-resolvers.service';
import { BookshelfEditComponent } from './bookshelf/bookshelf-edit/bookshelf-edit.component';
import { BookshelfHomeComponent } from './bookshelf/bookshelf-home/bookshelf-home.component';
import { BookshelfComponent } from './bookshelf/bookshelf.component';
import { LibraryComponent } from './library/library.component';

const routes: Routes = [
    //localhost:4200 -> redirect to localhost:4200/bookshelf
    {
        path: '',  redirectTo: 'bookshelf', pathMatch:'full'
    },

    //localhost:4200/library
    {
        path: 'library', component: LibraryComponent
    },
    {
        path: 'auth', component: AuthComponent
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