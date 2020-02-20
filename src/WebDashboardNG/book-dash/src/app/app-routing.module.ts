import { NgModule } from '@angular/core';

import { BookRentalPageComponent } from './book-rental-page/book-rental-page.component';
import { RentedBookPageComponent } from './rented-book-page/rented-book-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'books-rental-page', component: BookRentalPageComponent },
  { path: 'rented-books-page', component: RentedBookPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
