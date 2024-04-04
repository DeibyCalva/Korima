import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {




  getCursos() {
    return [
      {
        nombre: 'FrontEnd',
        descripcion: ' Práctica y teórica',
        duracion: 180,
        instructor: 'Korima',
        nivel: 'Avanzado',
      },
      {
        nombre: 'BackEnd',
        descripcion: ' Práctica y teórica',
        duracion: 180,
        instructor: 'Korima',
        nivel: 'Intermedio',
      },
      {
        nombre: 'QA',
        descripcion: ' Práctica y teórica',
        duracion: 180,
        instructor: 'Korima',
        nivel: 'Básico',
      },
    ];
  }

  getCursosMini() {
    return Promise.resolve(this.getCursos());
  }
  save(cursos:any){
    console.log(cursos);

  }
};
