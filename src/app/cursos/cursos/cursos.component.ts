import {Component, OnInit} from '@angular/core';
import {CursosService} from "../cursos.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";



@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit{
//cursos!: Cursos[];
  cursos: any;
  FormularioCursos!: FormGroup;

  nivel: string [] = ['Avanzado','Intermedio','Básico']
  constructor(private cursosService: CursosService, private pf:  FormBuilder) {

  }
  onSubmit(){
    this.cursos = this.saveCursos();
    if(this.FormularioCursos.valid){
      this.cursosService.save(this.FormularioCursos);
      alert('Guardado')

    }else{

    }
    this.FormularioCursos.reset();
  }

  ngOnInit() {
    this.cursosService.getCursosMini().then((data) => {
      this.cursos = data;

    });

    this.FormularioCursos = this.pf.group({
      nombre:['', Validators.required],
      descripcion: ['', Validators.required],
      duracion: ['', Validators.required],
      instructor: ['', Validators.required],
      nivel: ['', Validators.required]


    });


  }


  saveCursos(){

    const  saveCursos = {
      nombre: this.FormularioCursos.get('nombre')?.value ?? '',
      descripcion: this.FormularioCursos.get('descripcion')?.value ?? '',
      duracion: this.FormularioCursos.get('duracion')?.value ?? '',
      instructor: this.FormularioCursos.get('instructor')?.value ?? '',
      nivel: this.FormularioCursos.get('nivel')?.value ?? ''

    }
    return saveCursos;
  }

}
