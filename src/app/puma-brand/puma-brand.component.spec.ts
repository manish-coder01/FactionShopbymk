import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PumaBrandComponent } from './puma-brand.component';

describe('PumaBrandComponent', () => {
  let component: PumaBrandComponent;
  let fixture: ComponentFixture<PumaBrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PumaBrandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PumaBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
