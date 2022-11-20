import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  list: Product[] = this.productService.list;

  homeProducts$ : Observable<Product[]> = this.productService.getAll()
                                          .pipe(map((item) => item.filter((mov) => mov.featured === true)
                                          .sort(() => Math.random() - 0.5).slice(0, 5)));

  homeDiscountProducts$ : Observable<Product[]> = this.productService.getAll()
                                          .pipe(map((item) => item.sort(() => Math.random() - 0.5)
                                          .slice(0, 5)));


  constructor(private productService: ProductService) {}

  ngOnInit(): void {}
}
