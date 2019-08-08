import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TechRequirementComponent } from './component/tech-requirement/tech-requirement.component';

const routes: Routes = [
  { path: 'techreq', component: TechRequirementComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
