import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidspageComponent } from './kidspage.component';

describe('KidspageComponent', () => {
  let component: KidspageComponent;
  let fixture: ComponentFixture<KidspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KidspageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KidspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
