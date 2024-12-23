import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = 'ashwin@gmail.com';
  password: string = '1234';

  constructor(private studentApi:StudentsService, private router:Router){}

  login(){
    this.studentApi.login({email:this.email,password:this.password}).subscribe({
      next: (res:any) =>{
        sessionStorage.setItem('token',res.token);
        console.log(res.token);
        
        console.log(res);

        //get user role
        const role = this.studentApi.getRole()
        // console.log(role);
        if(role == 'admin'){
          this.router.navigate(['/dashboard'])
        }else{
          this.router.navigate(['/studentdashboard'])
        }
        
      },
      error: (err:any) =>{
        alert('Login Error')
        console.log(err);
      }
    })
  }
}
