import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-data-editor',
  templateUrl: './data-editor.component.html',
  styleUrls: ['./data-editor.component.scss'],
})
export class DataEditorComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private ar: ActivatedRoute,
    private router: Router
  ) {}

  product$: Observable<Product> = this.ar.params.pipe(
    switchMap((params) => this.productService.get(params['id']))
  );

  ngOnInit(): void {}

  onUpdate(product: Product): void {
    this.productService
      .update(product)
      .subscribe((product) => this.router.navigate(['/', 'admin']));
  }
}
