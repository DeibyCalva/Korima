import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modulo incial/home/home.component';
import { UserComponent } from './user/user/user.component';
import {MenubarModule} from "primeng/menubar";
import { NavComponent } from './nav/nav.component';
import {TableModule} from "primeng/table";
import { CursosComponent } from './cursos/cursos/cursos.component';
import {ReactiveFormsModule} from "@angular/forms";
import { AdduserComponent } from './user/adduser/adduser.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    NavComponent,
    CursosComponent,
    AdduserComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MenubarModule,
        TableModule,
        ReactiveFormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
