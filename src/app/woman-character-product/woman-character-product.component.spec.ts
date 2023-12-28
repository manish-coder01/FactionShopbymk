import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomanCharacterProductComponent } from './woman-character-product.component';

describe('WomanCharacterProductComponent', () => {
  let component: WomanCharacterProductComponent;
  let fixture: ComponentFixture<WomanCharacterProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomanCharacterProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomanCharacterProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
