import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StudentData } from '../../models/Student/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) {}

  getStudentByName(name: string) {
    const apiUrl = 'http://localhost:8080/student/search/';
    const url = `${apiUrl}${name}`;

    return this.http.get<StudentData>(url);
  }

  searchStudent(username: string, password: string) {
    const url = 'http://localhost:8080/student/search';

    const requestData = {
        "id": null,
        "name": null,
        "email": username,
        "githubId": null,
        "password": password,
        "rating": null,
        "total_ratings": null,
        "total_collaborators": null,
        "yes_collaborators": null
    };
    
    return this.http.post<StudentData>(url, requestData);
  }

  addStudent(name: string, email: string, password: string, github: string) {
    const url = 'http://localhost:8080/student/add';

    const requestData = {
        "name": name,
        "email": email,
        "githubId": github,
        "password": password,
        "rating": null,
        "total_ratings": null,
        "total_collaborators": null,
        "yes_collaborators": null
    };
    
    return this.http.post<StudentData>(url, requestData);
  }

  rateStudent(name: string, rating: number, collaborateAgain: string) {
    const url = 'http://localhost:8080/student/rate';
    
    let collab = 0
    if(collaborateAgain == 'Yes') {
      collab = 1
    }

    const requestData = {
        "name": name,
        "email": null,
        "githubId": null,
        "password": null,
        "rating": rating,
        "total_ratings": null,
        "total_collaborators": null,
        "yes_collaborators": collab
    };
    
    return this.http.post<StudentData>(url, requestData);
  }

  getAllStudent(){
    const url = 'http://localhost:8080/student/all';
    return this.http.get('http://localhost:8080/student/all');
  }

}
