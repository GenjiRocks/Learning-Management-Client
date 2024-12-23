import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CoursesService } from 'src/app/services/courses.service';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  
  courses :any = []
  selectCourseId : number  | null = null;
  courseSelected :any = {}

  course = {
    c_title :'',
    c_desp :'',
  }

  constructor(private courseService:CoursesService, private router : Router) {}

  ngOnInit() {
    this.loadCourse()
  }

  loadCourse():any{
    this.courseService.getCourses().subscribe({
      next: (data) => {
        this.courses = data;
        console.log(data);
        
      },
      error: (err) => {
        console.log(err);
      }

    })
  }

  selectedCourse(course : any){

    this.courseSelected = {...course}
    console.log(this.courseSelected)
  }

editCourse(data:any){

  
    this.courseService.updateCourse(data.id,data).subscribe({
      next: (data) => {
        this.loadCourse()
        console.log(data);
      },
      error: (err) => {
        console.log(err);
    }})
}

addCourse(){
  this.courseService.addCourse(this.course).subscribe({
    next: (data) => {
      this.loadCourse()
      console.log(data);
      this.course = {
        c_title :'',
        c_desp :'',
      }
    },
    error: (err) => {
      console.log(err);
  }})

      console.log(this.course);
}

resetCourse(){
  this.course = {
    c_title :'',
    c_desp :'',
  }
}

//jump to topics page of a sub
viewTopics(id:any){
  console.log(id);
  this.router.navigate(['/topics',id])

}
  
}
