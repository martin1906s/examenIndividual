import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crear-tarea',
  imports: [FormsModule],
  templateUrl: './crear-tarea.html',
  styleUrl: './crear-tarea.css',
})
export class CrearTarea {
  public inputTitulo: string = '';
  public inputDescripcion: string = '';

  agregarTarea() {
    if (this.inputTitulo == '' || this.inputTitulo == ' ') {
      alert('El titulo está vacio');
      console.log('El titulo está vacio');
    } else {
      alert(
        'Tarea guardada \n Titulo: ' + this.inputTitulo + '\n Descripcion: ' + this.inputDescripcion
      );
      console.log(
        'Tarea guardada \n Titulo: ' + this.inputTitulo + '\n Descripcion: ' + this.inputDescripcion
      );
    }
  }
}
