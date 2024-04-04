import {Component, OnInit} from '@angular/core';
import {ProductService} from "../product.service";


interface Users{
  nombre?:string;
  apellido?:string;
  edad?:number;
  email?:string;
  provincia?:string;
  telefono?:number;
}
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users!: Users[];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getUserMini().then((data) => {
      this.users = data;

  });
  }

}

