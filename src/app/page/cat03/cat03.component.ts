import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cat03',
  templateUrl: './cat03.component.html',
  styleUrls: ['./cat03.component.scss'],
})
export class Cat03Component implements OnInit {
  list: Product[] = this.productService.list;

  adventureProducts$ : Observable<Product[]> = this.productService.getAll()
                                          .pipe(map((item) => item.filter((mov) => mov.catId === 3)
                                          .sort(() => Math.random() - 0.5)));

  adventureHighlihtedProducts$ : Observable<Product[]> = this.productService.getAll()
                                          .pipe(map((item) => item.filter((mov) => mov.featured === true && mov.catId === 3)
                                          .sort(() => Math.random() - 0.5).slice(0, 5)));

  searchPhrase: string = '';

  constructor(private productService: ProductService) {}
  ngOnInit(): void {}
}
