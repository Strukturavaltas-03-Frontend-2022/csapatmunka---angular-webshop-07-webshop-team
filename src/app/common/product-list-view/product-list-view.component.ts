import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-list-view',
  templateUrl: './product-list-view.component.html',
  styleUrls: ['./product-list-view.component.scss']
})
export class ProductListViewComponent implements OnInit {

  @Input() products: Product[] | null = []

  searchPhrase: string = '';

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

}
