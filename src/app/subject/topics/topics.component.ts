import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent {
  topics :any = []
  selectedTopicId :number | null = null
  topicSelected:any = {}
  subjectId !:number  
  subjectName !:string;

  topic = {
    t_title : '',
    t_desp : '',
  }

  constructor(private topicService : CoursesService, private route: ActivatedRoute){}

  ngOnInit(){
    this.subjectId = this.route.snapshot.params['id']
    console.log(this.subjectId);
    this.loadTopics()
    
  }

  loadTopics(){
    this.topicService.getTopics(this.subjectId).subscribe({
      next : (data) => {
        this.topics = data
        // console.log(this.subjectName);
        console.log(data);
      },
      error : (err) => {
        console.log(err);
      }
    })
  }


  addTopics(){
    this.topicService.addTopics(this.subjectId,this.topic).subscribe({
      next: (data) => {
        this.loadTopics()
        console.log(data);
        this.topic = {
          t_title :'',
          t_desp :'',
        }
      },
      error: (err) => {
        console.log(err);
    }})
  
        console.log(this.topic);
  }

  resetTopic(){
    this.topic = {
      t_title :'',
      t_desp :'',
    }
  }

  // delete topic
delTopic(id:number){
  // confirm('Are you sure you want to delete this topic?')
  if(confirm('Are you sure you want to delete this topic?')){
    this.topicService.deleteTopics(id).subscribe({
      next : (data) => {
        this.loadTopics()
        // console.log(data);
      },
      error : (err) => {
        console.log(err);
      }
    }
    )
  }
  }

selectedTopic(topic : any){
 this.topicSelected = {...topic}
 console.log(this.topicSelected) ;
 
}

//edit topic
editTopic(topic:any){
  console.log(topic);
  
  this.topicService.updateTopics(topic.id,topic).subscribe({
    next : (data) => {
      this.loadTopics()
      // console.log(data);
    },
    error : (err) => {
      console.log(err);
    }
  })
}


}
