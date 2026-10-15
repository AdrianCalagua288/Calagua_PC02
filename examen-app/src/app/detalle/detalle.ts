import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Estudiante } from '../estudiante';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalle.html'
})
export class Detalle implements OnInit {
  estudiante!: Estudiante;
  suma: number = 0;
  promedio: number = 0;
  estado: string = '';
  observacion: string = '';

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    if (nav?.extras.state) {
      this.estudiante = nav.extras.state['estudiante'];
    }
  }

  ngOnInit(): void {
    if (this.estudiante) {
      this.suma = this.estudiante.nota1 + this.estudiante.nota2 + this.estudiante.nota3;
      this.promedio = this.suma / 3;

      this.estado = this.promedio >= 13 ? 'Aprobado' : 'Desaprobado';

      if (this.promedio >= 17) {
        this.observacion = 'Excelente';
      } else if (this.promedio >= 13) {
        this.observacion = 'Regular';
      } else {
        this.observacion = 'En riesgo';
      }
    }
  }

  volver(): void {
    this.router.navigate(['/tabla']);
  }
}