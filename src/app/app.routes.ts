import { Routes } from '@angular/router';
import { Tareas } from './components/tareas/tareas';
import { CrearTarea } from './components/crear-tarea/crear-tarea';
import { App } from './app';
import { Error404 } from './components/error-404/error-404';
import { EquipoLider } from './components/equipo-lider/equipo-lider';

export const routes: Routes = [
  { path: '', component: App },
  { path: 'tareas', component: Tareas },
  { path: 'crear-tarea', component: CrearTarea },
  { path: 'comunicacion', component: EquipoLider },
  { path: '**', component: Error404 },
];
