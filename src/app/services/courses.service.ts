import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private apiUrl = 'http://localhost:3000/api/courses'

  constructor(private http:HttpClient) { }

  //get all courses
  getCourses(){
    return this.http.get(this.apiUrl)
  }

  //get course by id
  getCourseById(id:number){
    return this.http.get(`${this.apiUrl}/${id}`)
  }

  //add a course
  addCourse(data:any){
    return this.http.post(`${this.apiUrl}/add`,data)
  }

  //delete a course
  deleteCourse(id:number){
    return this.http.delete(`${this.apiUrl}/delete/${id}`) 
  }

  //update the course
  updateCourse(id:number,data:any){
    return this.http.put(`${this.apiUrl}/update/${id}`,data)
  }


  // Topics api calls

  //get all topics by subject id
  getTopics(id:number){
    return this.http.get(`${this.apiUrl}/topics/${id}`)
  }

  //add topics into course
  addTopics(id:number,data:any){
    return this.http.post(`${this.apiUrl}/topics/add/${id}`,data)
  }

  //delete topics from course
  deleteTopics(id:number){
    return this.http.delete(`${this.apiUrl}/topics/delete/${id}`)
  }

  //update topics in course
  updateTopics(id:number,data:any){
    console.log(id);
    
    return this.http.put(`${this.apiUrl}/topics/update/${id}`,data)
  }

}
