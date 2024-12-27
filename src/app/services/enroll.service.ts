import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnrollService {

  private apiUrl = 'http://localhost:3000/api/enroll'

  constructor(private http:HttpClient) { }

  //enroll student
  enrollStudent(data:any){
    return this.http.post(`${this.apiUrl}/add`,data)
  }
}
