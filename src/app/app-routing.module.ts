import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import { TechRequirementComponent } from './component/tech-requirement/tech-requirement.component';

const routes: Routes = [
  { path: 'techreq', component: TechRequirementComponent }
=======
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  }
>>>>>>> 3049177aa950405fa0a4de24a2ab38c9c72fcd49
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
