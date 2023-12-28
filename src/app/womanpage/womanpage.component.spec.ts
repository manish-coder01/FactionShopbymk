import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomanpageComponent } from './womanpage.component';

describe('WomanpageComponent', () => {
  let component: WomanpageComponent;
  let fixture: ComponentFixture<WomanpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomanpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomanpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
