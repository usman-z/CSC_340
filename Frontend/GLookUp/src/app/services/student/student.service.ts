import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { StudentData } from '../../models/Student/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) {}

  searchStudent(username: string, password: string) { // by Username and Password
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

  rateStudent(name: string, rating: number, collaborateAgain: boolean) {
    const url = 'http://localhost:8080/student/rate';

    const ratingData = {
      "name": name,
      "rating": rating,
      "collaborate": collaborateAgain
    };
    
    return this.http.post<StudentData>(url, ratingData);
  }

  getAllStudent(){
    const url = 'http://localhost:8080/student/all';
    return this.http.get('http://localhost:8080/student/all');
  }

  updateStudentApprovalStatus(studentId: number,): Observable<any> {
    const url = `http://localhost:8080/student/updates/${studentId}`;

    // Fetch the existing student data first
    return this.getStudentById(studentId).pipe(
      switchMap((existingStudent: StudentData) => {
        // Update the approval status
        existingStudent.approved = true;

        // Send the updated Student object to the server
        return this.http.post(url, existingStudent);
      })
    );
  }

  getStudentsByName(studentName: string) {
    const url = `http://localhost:8080/student/searchStudents/${studentName}`;
    return this.http.get<StudentData[]>(url);
  }

  getStudentById(studentId: number): Observable<StudentData> {
    const url = `http://localhost:8080/student/get/${studentId}`;
    return this.http.get<StudentData>(url);
  }

  deleteStudent(student: StudentData,studentId: number): Observable<any> {
    const url = `http://localhost:8080/student/delete/${studentId}`;
        return this.http.delete(url);
  }

  sendStudentEmail(receiverName: string, receiverEmail: string) {
    const url = 'http://localhost:8080/email/send';

    const requestData = {
      "to": receiverEmail,
      "subject": "GLookUp | Approved Account ",
      "body": "Hey "+receiverName+",\n\n"+"Your account Was approved. We would like to invite you to collaborate on a project and your rate fellow classmates through GLookUp. Thank you, and Happy collaborating and rating!\n\nBest regards,\nGLookUp"
    };
    
    return this.http.post<StudentData>(url, requestData);
  }

  newAccountEmail(receiverName: string, receiverEmail: string) {
    const url = 'http://localhost:8080/email/send';

    const requestData = {
      "to": receiverEmail,
      "subject": "GLookUp | Account Approval Pending",
      "body": "Hey "+receiverName+",\n\n"+"Thank you for creating an account with GLookUp, your account is currently pending approval and will shortly be approved by our admins. Upon account approval, you will receive an account approved email from us.\n\nBest regards,\nGLookUp"
    };
    
    return this.http.post<StudentData>(url, requestData);
  }

}
