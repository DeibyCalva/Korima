import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  getUser(){
    return[
      {
        nombre: 'juan',
        apellido:'leon',
        edad: 25,
        email:'korima.curso@gmail.com',
        provincia:'Loja',
        telefono: 9181597191,


      },{
        nombre: 'juan',
        apellido:'Rojas',
        edad: 22,
        email:'korima.curso@gmail.com',
        provincia:'Napo',
        telefono: 9181597191,

      },
    ]
  }
  getUserMini() {
    return Promise.resolve(this.getUser());
  }
  save(users:any){
    console.log(users);

  }

};
