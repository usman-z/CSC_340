import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StudentData } from '../models/Student/student.model';

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
}
