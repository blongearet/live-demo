import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListSimpleComponent } from './product-list-simple.component';

describe('ProductListSimpleComponent', () => {
  let component: ProductListSimpleComponent;
  let fixture: ComponentFixture<ProductListSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
