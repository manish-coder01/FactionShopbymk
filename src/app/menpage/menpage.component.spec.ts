import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenpageComponent } from './menpage.component';

describe('MenpageComponent', () => {
  let component: MenpageComponent;
  let fixture: ComponentFixture<MenpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
