import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterationComponent } from './components/registeration/registeration.component';
import { TodosComponent } from './components/todos/todos.component';
import { ViewtaskComponent } from './components/viewtask/viewtask.component';

const routes: Routes = [
  {path : 'home', component:HomeComponent},
  {path : '', redirectTo : '/home', pathMatch : 'full'}  ,
  {path:'login/:name', component:LoginComponent},
  {path:'registeration', component:RegisterationComponent}, 
  {path:'task', component: TodosComponent },{ 
  path: 'task/view/:id', component: ViewtaskComponent }];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
exports: [RouterModule],
})
export class AppRoutingModule {}
