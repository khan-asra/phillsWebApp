import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProductInformationComponent } from './show-product-information.component';

describe('ShowProductInformationComponent', () => {
  let component: ShowProductInformationComponent;
  let fixture: ComponentFixture<ShowProductInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowProductInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowProductInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
