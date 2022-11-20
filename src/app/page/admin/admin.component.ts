import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  constructor(private productService: ProductService) {}

  ngOnInit(): void {}

  productList$: Observable<Product[]> = this.productService.getAll();

  onDelete(prod: Product): void {
    this.productService
      .remove(prod)
      .subscribe((prod) => (this.productList$ = this.productService.getAll()));
  }

  searchPhrase: string = '';
}
