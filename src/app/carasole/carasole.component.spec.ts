import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarasoleComponent } from './carasole.component';

describe('CarasoleComponent', () => {
  let component: CarasoleComponent;
  let fixture: ComponentFixture<CarasoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarasoleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarasoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
