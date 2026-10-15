import { Routes } from '@angular/router';
import { Tabla } from './tabla/tabla';
import { Detalle } from './detalle/detalle';

export const routes: Routes = [
  { path: '', redirectTo: 'tabla', pathMatch: 'full' },
  { path: 'tabla', component: Tabla },
  { path: 'detalle', component: Detalle },
  { path: '**', redirectTo: 'tabla' }
];