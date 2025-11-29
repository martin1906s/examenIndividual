import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tareas',
  imports: [NgClass, FormsModule],
  templateUrl: './tareas.html',
  styleUrl: './tareas.css',
})
export class Tareas {
  public tareasList: Array<any>;
  public newTask: boolean = false;
  public newTarea: string = '';
  constructor() {
    this.tareasList = [
      { id: 1, titulo: 'Tarea 1', descripcion: 'Descripcion de tarea 1', completada: 'si' },
      { id: 2, titulo: 'Tarea 2', descripcion: 'Descripcion de tarea 2', completada: 'no' },
      { id: 3, titulo: 'Tarea 3', descripcion: 'Descripcion de tarea 3', completada: 'si' },
      { id: 4, titulo: 'Tarea 4', descripcion: 'Descripcion de tarea 4', completada: 'no' },
      { id: 5, titulo: 'Tarea 5', descripcion: 'Descripcion de tarea 5', completada: 'si' },
    ];
  }

  cambiarEstado(id: number) {
    this.tareasList = this.tareasList.map((tarea) => {
      if (tarea.id === id) {
        return {
          ...tarea,
          completada: tarea.completada === 'si' ? 'no' : 'si',
        };
      }
      return tarea;
    });
  }

  eliminar(id: number) {
    this.tareasList.splice(id, 1);
  }

  nuevaTarea() {
    if (this.newTask == true) {
      this.newTask = false;
    } else {
      this.newTask = true;
    }
  }

  agregarTarea() {
    if (this.newTarea) {
      const nuevoId = this.tareasList.length + 1;
      this.tareasList.push({
        id: nuevoId,
        titulo: this.newTarea,
        descripcion: 'Descripcion de tarea ' + nuevoId,
        completada: 'no',
      });
      this.newTarea = '';
    }
  }

  haciendoFoco() {
    console.warn('Input Activo!!');
  }
  saliendoDelFoco() {
    console.warn('Input Inactivo!!');
  }
}
