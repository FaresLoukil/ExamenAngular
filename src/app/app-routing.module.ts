import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProjectsComponent} from "./projects/projects.component";
import {TasksComponent} from "./tasks/tasks.component";
import {NotfoundComponent} from "./notfound/notfound.component";
import {LoginComponent} from "./login/login.component";
import {AddTaskComponentComponent} from "./add-task-component/add-task-component.component";
import {DetailsTaskComponent} from "./details-task/details-task.component";

const routes: Routes = [
  {path:"",redirectTo:"login",pathMatch:"full"},
  {path:"login",component:LoginComponent},
  {path:"projects",component:ProjectsComponent},
  {path:"tasks",component:TasksComponent},
  {path:"addTask/:id",component:AddTaskComponentComponent},
  {path:"task/:id",component:DetailsTaskComponent},
  {path:"**", component:NotfoundComponent,pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
