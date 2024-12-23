import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegComponent } from './auth/reg/reg.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CourseComponent } from './subject/course/course.component';
import { TopicsComponent } from './subject/topics/topics.component';
import { FormsModule } from '@angular/forms';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StudentsComponent } from './students/students.component';
import { InterceptInterceptor } from './interceptors/intercept.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegComponent,
    DashboardComponent,
    CourseComponent,
    TopicsComponent,
    StudentDashboardComponent,
    StudentsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
