import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import {ProductService} from "../product.service";

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit{
  usersForm!: FormGroup;
  users: any;



  provincias: string [] = ['Azuay',
    'Bolívar',
    'Cañar',
    'Carchi',
    'Chimborazo',
    'Cotopaxi',
    'El Oro',
    'Esmeraldas',
    'Galápagos',
    'Guayas',
    'Imbabura',
    'Loja',
    'Los Ríos',
    'Manabí',
    'Morona Santiago',
    'Napo',
    'Orellana',
    'Pastaza',
    'Pichincha',
    'Santa Elena',
    'Santo Domingo de los Tsáchilas',
    'Sucumbíos',
    'Tungurahua',
    'Zamora Chinchipe']
  constructor(private pf:  FormBuilder,
              private productService: ProductService) {

  }

  ngOnInit() {
    this.usersForm = this.pf.group({
      nombre:['', Validators.required],
      apellido: ['', Validators.required],
      edad: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      provincia: ['', Validators.required],
      telefono: null,

    });
  }

  onSubmit(){
    this.users = this.saveUsers();
    if(this.usersForm.valid){
      this.productService.save(this.usersForm);
      alert('Guardado')

    }else{

    }
    this.usersForm.reset();

  }
  saveUsers(){

    const  saveUsers = {
      nombre: this.usersForm.get('nombre')?.value ?? '',
      apellido: this.usersForm.get('apellido')?.value ?? '',
      localidad: this.usersForm.get('edad')?.value ?? '',
      email: this.usersForm.get('email')?.value ?? '',
      provincia: this.usersForm.get('provincia')?.value ?? '',
      telefono: this.usersForm.get('telefono')?.value ?? ''


    }
    return saveUsers;
  }

}
