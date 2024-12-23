import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';


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

    //Check logged In
    isLoggedIn(): boolean {
      return !!sessionStorage.getItem('token');
    }

  //register the user
  register(user:any){
    return this.http.post(`${this.apiUrl}/register`, user)
  }

  //logging out user
  logout(){
    sessionStorage.removeItem('token')
  }

  //set user role
  getRole(): string | null {
    const token = sessionStorage.getItem('token');
    if (token) {
      const decoded: any = jwtDecode(token);
      // console.log(decoded);
      
      return decoded.role;
    }
    return null;
  }

  //get all students
  getAllStudents(){
    return this.http.get(`${this.apiUrl}`)
  }

  //delete student
  deleteStudent(id:number){
    return this.http.delete(`${this.apiUrl}/delete/${id}`)
  }
  
  //edit student data
  editStudent(id:number, student:any){
    return this.http.put(`${this.apiUrl}/edit/${id}`,student)
  }
}
