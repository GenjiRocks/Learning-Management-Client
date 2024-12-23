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
  student = {
    name:'',
    email:'',
    password:''
  }

  constructor(private studentService : StudentsService){}

  ngOnInit(){
    this.loadStudents()
  }

  loadStudents(){
    this.studentService.getAllStudents().subscribe({
      next: (data) => {
        this.students = data
        // console.log(this.students);
        
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  addStudent(){
    this.studentService.register(this.student).subscribe({
      next: (data) => {
        this.loadStudents();
        console.log(data)
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  resetStudent(){
    this.student = {
      name:'',
      email:'',
      password:''
    }
  }

  deleteStudent(id:number){
    if(confirm('Are you sure you want to delete this student?')){
      this.studentService.deleteStudent(id).subscribe({
        next: (data) => {
          this.loadStudents();
          // console.log(data)
        },
        error: (err) => {
          console.log(err)
        }
      })
    }
   
  }

studentSelected(student:any){
  this.selectedStudent = {...student}
  console.log(this.selectedStudent);
  
}

updateStudent(student:any){
  
   this.studentService.editStudent(student.id,student).subscribe({
    next: (data) => {
      this.loadStudents();
      console.log(data)
    },
    error: (err) => {
      console.log(err)
    }
  })
  
}




}
