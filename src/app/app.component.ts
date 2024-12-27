import { Component } from '@angular/core';
import { StudentsService } from './services/students.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public userService: StudentsService, public router :Router){}

  //logout user
  logout(){
    this.userService.logout();
    this.router.navigate(['/']);

  }

  title = 'Learn-Client';
}
