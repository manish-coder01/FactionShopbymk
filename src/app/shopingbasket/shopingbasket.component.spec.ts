import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopingbasketComponent } from './shopingbasket.component';

describe('ShopingbasketComponent', () => {
  let component: ShopingbasketComponent;
  let fixture: ComponentFixture<ShopingbasketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopingbasketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopingbasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
