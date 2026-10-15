import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Estudiante } from '../estudiante';
import alumnosData from '../estudiantes.json';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla.html'
})
export class Tabla {
  estudiantes: Estudiante[] = alumnosData;

  constructor(private router: Router) {}

  verDetalle(e: Estudiante): void {
    this.router.navigate(['/detalle'], { state: { estudiante: e } });
  }
}