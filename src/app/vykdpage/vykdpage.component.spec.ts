import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VykdpageComponent } from './vykdpage.component';

describe('VykdpageComponent', () => {
  let component: VykdpageComponent;
  let fixture: ComponentFixture<VykdpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VykdpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VykdpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
