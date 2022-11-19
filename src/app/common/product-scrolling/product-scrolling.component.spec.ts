import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductScrollingComponent } from './product-scrolling.component';

describe('ProductScrollingComponent', () => {
  let component: ProductScrollingComponent;
  let fixture: ComponentFixture<ProductScrollingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductScrollingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductScrollingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
