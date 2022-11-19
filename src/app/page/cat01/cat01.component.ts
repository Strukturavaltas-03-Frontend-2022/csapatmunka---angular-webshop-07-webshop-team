import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cat01',
  templateUrl: './cat01.component.html',
  styleUrls: ['./cat01.component.scss'],
})
export class Cat01Component implements OnInit {
  list: Product[] = this.productService.list;
  documentaryProducts: Product[] = this.productService.getDocumentaryProducts();
  documentaryHighlihtedProducts: Product[] = this.productService.getDocumentaryHighlightedProducts()

  searchPhrase: string = '';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {}
}
