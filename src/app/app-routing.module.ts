import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegComponent } from './auth/reg/reg.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CourseComponent } from './subject/course/course.component';
import { TopicsComponent } from './subject/topics/topics.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'courses',component:CourseComponent},
  {path:'topics/:id',component:TopicsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
