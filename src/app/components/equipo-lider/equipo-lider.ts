import { Component } from '@angular/core';
import { MiembroEquipo } from '../miembro-equipo/miembro-equipo';

@Component({
  selector: 'app-equipo-lider',
  imports: [MiembroEquipo],
  templateUrl: './equipo-lider.html',
  styleUrl: './equipo-lider.css',
})
export class EquipoLider {
  count: number = 0;
  recibirContador(numero: number) {
    this.count += numero;
  }
}
