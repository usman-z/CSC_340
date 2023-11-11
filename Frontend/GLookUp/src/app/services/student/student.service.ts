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

}
