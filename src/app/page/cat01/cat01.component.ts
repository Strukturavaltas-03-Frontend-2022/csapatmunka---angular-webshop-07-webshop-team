import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cat01',
  templateUrl: './cat01.component.html',
  styleUrls: ['./cat01.component.scss'],
})
export class Cat01Component implements OnInit {
  list: Product[] = this.productService.list;

  documentaryProducts$ : Observable<Product[]> = this.productService.getAll()
                                          .pipe(map((item) => item.filter((mov) => mov.catId === 1)
                                          .sort(() => Math.random() - 0.5)));

  documentaryHighlihtedProducts$ : Observable<Product[]> = this.productService.getAll()
                                          .pipe(map((item) => item.filter((mov) => mov.featured == true && mov.catId === 1)
                                          .sort(() => Math.random() - 0.5).slice(0, 5)));

  searchPhrase: string = '';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {}
}
