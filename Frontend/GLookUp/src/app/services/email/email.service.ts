import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StudentData } from 'src/app/models/Student/student.model';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  sendEmail(receiverName: string, receiverEmail: string, senderName: string, senderEmail: string, projectName: string, projectDescription: string, projectMessage: string) {
    const url = 'http://localhost:8080/email/send';

    const requestData = {
      "to": receiverEmail,
      "subject": "GLookUp | Request to Collaborate from "+senderName,
      "body": "Hey "+receiverName+",\n\n"+senderName+" would like to collaborate with you on a project titled "+projectName+" through GLookUp. Project description: "+projectDescription+", and a Message from "+senderName+": "+projectMessage+". If interested in this collaboration, you can contact "+(senderName.split(' '))[0]+ " at "+senderEmail+". Thank you, and Happy collaboration!\n\nBest regards,\nGLookUp"
    };
    
    return this.http.post<StudentData>(url, requestData);

  }
}
