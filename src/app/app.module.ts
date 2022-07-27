import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './componets/product-list/product-list.component';
import {ProductService} from "./services/product.service";
import {HttpClientModule} from "@angular/common/http";
import { ProductCategoryMenuComponent } from './componets/product-category-menu/product-category-menu.component';
import { SearchComponent } from './componets/search/search.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ProductDetailsComponent } from './componets/product-details/product-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from "@angular/material/paginator";
import {NgxPaginationModule} from "ngx-pagination";
import { CartStatusComponent } from './componets/cart-status/cart-status.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCategoryMenuComponent,
    SearchComponent,
    ProductDetailsComponent,
    CartStatusComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatPaginatorModule,
        NgxPaginationModule
    ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
