import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
})
export class NewComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private ar: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {}

  productList$: Observable<Product[]> = this.productService.getAll();

  movie: Product = new Product();

  enterNew(product: Product): void {
    this.productService
      .create(product)
      .subscribe((product) => this.router.navigate(['/', 'admin']));
  }
}
