import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EnrollService } from '../services/enroll.service';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.css']
})
export class EnrollComponent {
  userId !:number
  courses:any = [];
  topics:any = []
  selectedCourse !:number
  selectedTopics :any = []

  constructor(private route:ActivatedRoute,private enrollService : EnrollService,private courseService:CoursesService){}

  ngOnInit(){
    this.userId = this.route.snapshot.params['id']
    console.log(this.userId);
    this.loadCourse();
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

  onCourseSelected(event:any){
    // console.log(event.target.value);
    this.selectedCourse = event.target.value;
    this.selectedTopics = [];
    this.courseService.getTopics(this.selectedCourse).subscribe({
      next: (data) => {
        // console.log(data);
        this.topics = data;
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  assignTopic(id:number){
    // console.log(id);
    const index = this.selectedTopics.indexOf(id)
    if(index>-1){
      this.selectedTopics.splice(index,1)
    }else{
      this.selectedTopics.push(id)
    }

    console.log(this.selectedTopics);
    
    
  }


  assignCourse(){
    console.log(this.userId);
    console.log(this.selectedCourse);
    
    console.log(this.selectedTopics);
    this.enrollService.enrollStudent({user_id:this.userId,course_id:this.selectedCourse,topic_id:this.selectedTopics}).subscribe({
      next: (data) =>{
        console.log(data);
        alert('Course Assigned Successfully')
      },
      error: (err) => {
        console.log(err);
      }
    })
    
  }


  clearAll(){
    this.selectedTopics = []
    this.selectedCourse = 0
    
  }
}
