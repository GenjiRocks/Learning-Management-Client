import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent {

email : string = ''
password : string = ''
name : string = ''

constructor(private studentApi : StudentsService, private router : Router ){}

register(){
  this.studentApi.register({name:this.name,email:this.email, password:this.password}).subscribe({
      next:(res:any)=>{
        console.log(res)
        this.router.navigate(['/'])
      },
      error:(err:any)=>{
        console.log(err)
        alert('Registration Error')
      }
  })
}

}
