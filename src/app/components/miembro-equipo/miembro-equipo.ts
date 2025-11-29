import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-miembro-equipo',
  imports: [],
  templateUrl: './miembro-equipo.html',
  styleUrl: './miembro-equipo.css',
})
export class MiembroEquipo {
  @Input() contadorPadre: number = 0;
  @Output() aumentarContador = new EventEmitter<number>();
  sumar() {
    this.aumentarContador.emit(1);
  }
  ngOnInit() {
    this.aumentarContador.emit(0);
  }
}
