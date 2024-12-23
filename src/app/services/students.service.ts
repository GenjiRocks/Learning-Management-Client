import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private apiUrl = 'http://localhost:3000/api/users'

  constructor(private http:HttpClient) { }

  //login the user
  login(user:any){
    return this.http.post(`${this.apiUrl}/login`, user)
  }

  //register the user
  register(user:any){
    return this.http.post(`${this.apiUrl}/register`, user)
  }

  
}
