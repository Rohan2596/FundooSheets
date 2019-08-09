import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
<<<<<<< HEAD
import { VeiwSheetsComponent } from './component/veiw-sheets/veiw-sheets.component';
=======
import { RegisterComponent } from './component/register/register.component';
<<<<<<< HEAD
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ProfilePicComponent } from './component/profile-pic/profile-pic.component';
=======
>>>>>>> adef52cad0247d41c454f93ad94e47abc00bbf01
>>>>>>> 7522174937f316b4906382ada86d61082d2304d6

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
<<<<<<< HEAD
  {
    path:'register',
    component:RegisterComponent},
{
  path:'dashboard',
  component: DashboardComponent
},
{
  path:'profilepic',
  component: ProfilePicComponent
},

  {
    path:'sheets',
    component:VeiwSheetsComponent
  }
=======
  {path:'register',
component:RegisterComponent}
>>>>>>> adef52cad0247d41c454f93ad94e47abc00bbf01
>>>>>>> 7522174937f316b4906382ada86d61082d2304d6
]
@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
