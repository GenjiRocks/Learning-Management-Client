import { Component } from '@angular/core';
import { StudentsService } from '../services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  students : any = []
  selectedStudentID !: number
  selectedStudent:any = {}

  constructor(private studentService : StudentsService){}

  ngOnInit(){
    this.studentService.getAllStudents().subscribe({
      next: (data) => {
        this.students = data
        console.log(this.students);
        
      },
      error: (err) => {
        console.log(err)
      }
    })
  }


}
