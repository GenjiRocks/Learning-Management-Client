import { Component } from '@angular/core';
import { EnrollService } from '../services/enroll.service';
import { StudentsService } from '../services/students.service';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent {

  courses : any = []

  constructor(private courseApi:EnrollService , private studentService : StudentsService){}

  ngOnInit(){
    this.loadCourses()
  }

  loadCourses(){
    //get userid from token
   const id : any = this.studentService.getId()
   console.log(id);
   this.courseApi.assignedCourses(id).subscribe({
    next:(res:any)=>{
      this.courses = this.groupCourses(res); 
      console.log(this.courses);
      
     },
     error:(err)=>{
      console.log(err);
     }
   })
  }

  // Group courses and topics by course_id
groupCourses(data: any[]): any[] {
  const grouped: { [key: number]: any } = {};

  data.forEach((item) => {
    if (!grouped[item.course_id]) {
      grouped[item.course_id] = {
        c_title: item.c_title,
        topics: [],
      };
    }
    grouped[item.course_id].topics.push(item.t_title);
  });

  return Object.values(grouped); // Convert object to array
}

}
