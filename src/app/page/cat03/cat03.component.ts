import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cat03',
  templateUrl: './cat03.component.html',
  styleUrls: ['./cat03.component.scss'],
})
export class Cat03Component implements OnInit {
  list: Product[] = this.productService.list;

  adventureProducts: Product[] = this.productService.getAdventureProducts()
  adventureHighlihtedProducts: Product[] = this.productService.getAdventureHighlightedProducts()

  searchPhrase: string = '';

  constructor(private productService: ProductService) {}
  ngOnInit(): void {}
}
