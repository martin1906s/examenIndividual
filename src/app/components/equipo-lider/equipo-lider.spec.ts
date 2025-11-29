import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipoLider } from './equipo-lider';

describe('EquipoLider', () => {
  let component: EquipoLider;
  let fixture: ComponentFixture<EquipoLider>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EquipoLider]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipoLider);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
