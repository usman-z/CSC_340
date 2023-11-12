import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StudentData } from 'src/app/models/Student/student.model';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  sendEmail(receiverName: string, receiverEmail: string, senderName: string, senderEmail: string) {
    const url = 'http://localhost:8080/email/send';

    const requestData = {
      "to": receiverEmail,
      "subject": "GLookUp | Request to Collaborate from "+senderName,
      "body": "Hey "+receiverName+"! "+senderName+" would like to Collaborate with you on a project. If interested, you can contact them at "+senderEmail+". Thank you, and Happy collaboration."
    };
    
    return this.http.post<StudentData>(url, requestData);

  }
}
