import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegComponent } from './auth/reg/reg.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CourseComponent } from './subject/course/course.component';
import { TopicsComponent } from './subject/topics/topics.component';

import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { authGuard } from './auth/guard/auth.guard';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegComponent},
  {path:'dashboard',component:DashboardComponent, canActivate:[authGuard]},
  {path:'courses',component:CourseComponent,canActivate:[authGuard]},
  {path:'topics/:id',component:TopicsComponent,canActivate:[authGuard]},
  {path:'studentdashboard',component:StudentDashboardComponent},
  {path:'studentslist',component:StudentsComponent,canActivate:[authGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
