import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { BookComponent } from './book/book.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BookCatalogComponent } from './book-catalog/book-catalog.component';
import 'tachyons';
import { BookRentalPageComponent } from './book-rental-page/book-rental-page.component';
import { RentedBookPageComponent } from './rented-book-page/rented-book-page.component';
import { AppRoutingModule } from './app-routing.module';
import { DefaultDataRentedComponent } from './default-data-rented/default-data-rented.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BookRentalAdminPageComponent } from './book-rental-admin-page/book-rental-admin-page.component';
import { AdminMenuComponent } from './book-rental-admin-page/admin-menu/admin-menu.component';
import { AdminRentedBooksPageComponent } from './book-rental-admin-page/admin-rented-books-page/admin-rented-books-page.component';

registerLocaleData(en);



@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    HeaderComponent,
    FooterComponent,
    BookCatalogComponent,
    BookRentalPageComponent,
    RentedBookPageComponent,
    DefaultDataRentedComponent,
    BookRentalAdminPageComponent,
    AdminMenuComponent,
    AdminRentedBooksPageComponent,
    
  ],
  imports: [
    BrowserModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NzInputModule,
    FontAwesomeModule
    
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
