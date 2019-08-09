import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
<<<<<<< HEAD
import { VeiwSheetsComponent } from './component/veiw-sheets/veiw-sheets.component';
=======
import { RegisterComponent } from './component/register/register.component';
>>>>>>> adef52cad0247d41c454f93ad94e47abc00bbf01

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
<<<<<<< HEAD
  {
    path:'sheets',
    component:VeiwSheetsComponent
  }
=======
  {path:'register',
component:RegisterComponent}
>>>>>>> adef52cad0247d41c454f93ad94e47abc00bbf01
]
@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
