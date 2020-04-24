import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductbyauthorComponent } from './productbyauthor.component';

describe('ProductbyauthorComponent', () => {
  let component: ProductbyauthorComponent;
  let fixture: ComponentFixture<ProductbyauthorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductbyauthorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductbyauthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
