import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbroideredKurtasComponent } from './embroidered-kurtas.component';

describe('EmbroideredKurtasComponent', () => {
  let component: EmbroideredKurtasComponent;
  let fixture: ComponentFixture<EmbroideredKurtasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmbroideredKurtasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmbroideredKurtasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
