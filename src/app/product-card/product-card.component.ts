import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  movie: Product = {
    id: 0,
    catId: 0,
    name: '',
    description: '',
    image: '',
    price: 0,
    stock: 0,
    featured: false,
    active: false,
  };

  constructor(private productService: ProductService) {}

  ngOnInit(): void {}
}
