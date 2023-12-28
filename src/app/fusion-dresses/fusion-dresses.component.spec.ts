import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FusionDressesComponent } from './fusion-dresses.component';

describe('FusionDressesComponent', () => {
  let component: FusionDressesComponent;
  let fixture: ComponentFixture<FusionDressesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FusionDressesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FusionDressesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
