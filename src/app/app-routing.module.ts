import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { AddProjectComponent } from './component/add-project/add-project.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path : 'addProject',
    component : AddProjectComponent
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
