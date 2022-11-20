import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cat02',
  templateUrl: './cat02.component.html',
  styleUrls: ['./cat02.component.scss'],
})
export class Cat02Component implements OnInit {
  list: Product[] = this.productService.list;

  comedyProducts$ : Observable<Product[]> = this.productService.getAll()
                                          .pipe(map((item) => item.filter((mov) => mov.catId === 2)
                                          .sort(() => Math.random() - 0.5)));

  comedyHighlihtedProducts$ : Observable<Product[]> = this.productService.getAll()
                                          .pipe(map((item) => item.filter((mov) => mov.featured === true && mov.catId === 2)
                                          .sort(() => Math.random() - 0.5).slice(0, 5)));

  searchPhrase: string = '';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {}
}
