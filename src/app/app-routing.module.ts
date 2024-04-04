import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modulo incial/home/home.component';
import { UserComponent } from './user/user/user.component';
import {CursosComponent} from "./cursos/cursos/cursos.component";
import {AdduserComponent} from "./user/adduser/adduser.component";

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'user', component: UserComponent},
  {path:'adduser', component: AdduserComponent},
  {path:'cursos', component: CursosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
