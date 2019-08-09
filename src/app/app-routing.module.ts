import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { VeiwSheetsComponent } from './component/veiw-sheets/veiw-sheets.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'sheets',
    component:VeiwSheetsComponent
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
