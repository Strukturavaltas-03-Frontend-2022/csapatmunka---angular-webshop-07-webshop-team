import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { Cat01Component } from './page/cat01/cat01.component';
import { Cat02Component } from './page/cat02/cat02.component';
import { HomeComponent } from './page/home/home.component';
import { Cat03Component } from './page/cat03/cat03.component';
import { FilterPipe } from './pipe/filter.pipe';
import { FilterCategoryPipe } from './pipe/filter-category.pipe';
import { ProductCardComponent } from './common/product-card/product-card.component';
import { ProductScrollingComponent } from './common/product-scrolling/product-scrolling.component';
import { ProductListViewComponent } from './common/product-list-view/product-list-view.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    Cat01Component,
    Cat02Component,
    HomeComponent,
    Cat03Component,
    FilterPipe,
    FilterCategoryPipe,
    ProductCardComponent,
    ProductScrollingComponent,
    ProductListViewComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
