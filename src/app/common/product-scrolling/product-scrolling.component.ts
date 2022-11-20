import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-scrolling',
  templateUrl: './product-scrolling.component.html',
  styleUrls: ['./product-scrolling.component.scss']
})
export class ProductScrollingComponent implements OnInit {

  constructor(private productService: ProductService) { }

  @Input() products: Product[] | null = []

  ngOnInit(): void {}

}
