import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-data-editor',
  templateUrl: './data-editor.component.html',
  styleUrls: ['./data-editor.component.scss']
})
export class DataEditorComponent implements OnInit {

  productList$ : Observable<Product[]> = this.productService.getAll();

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  onDelete(prod: Product): void{
    this.productService.remove(prod).subscribe(
      prod => this.productList$ = this.productService.getAll(),
    );
  }

}
