import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { ButtonComponent } from './components/button/button.component';
import { AppRoutingModule } from './app.routing.module';
import { ViewtaskComponent } from './components/viewtask/viewtask.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterationComponent } from './components/registeration/registeration.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    ButtonComponent,
    ViewtaskComponent,
    LoginComponent,
    RegisterationComponent,
    HomeComponent
  ],
  imports: [
  BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {



 }
