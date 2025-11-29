import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiembroEquipo } from './miembro-equipo';

describe('MiembroEquipo', () => {
  let component: MiembroEquipo;
  let fixture: ComponentFixture<MiembroEquipo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiembroEquipo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiembroEquipo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
