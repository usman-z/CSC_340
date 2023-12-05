import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StudentData } from 'src/app/models/Student/student.model';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  url: string = 'http://localhost:8080/email/send';

  constructor(private http: HttpClient) { }

  sendCollaborationEmail(receiverName: string, receiverEmail: string, senderName: string, senderEmail: string, projectName: string, projectMessage: string) {
    const requestData = {
      "to": receiverEmail,
      "subject": "GLookUp | Request to Collaborate from "+senderName,
      "body": "Hey "+receiverName+",\n\n"+senderName+" would like to collaborate with you on a project titled "+projectName+" through GLookUp. A Message from "+senderName+": "+projectMessage+". If interested in this collaboration, you can contact "+(senderName.split(' '))[0]+ " at "+senderEmail+". Thank you, and Happy collaboration!\n\nBest regards,\nGLookUp"
    };
    
    return this.http.post<StudentData>(this.url, requestData);
  }

  sendAcceptInvitationEmail(receiverName: string, receiverEmail: string, senderName: string, senderEmail: string, projectName: string, projectDescription: string, projectMessage: string) {
    const requestData = {
      "to": receiverEmail,
      "subject": "GLookUp | Collaboration Accepted from "+senderName,
      "body": "Hey "+receiverName+",\n\n"+senderName+" has accepted your invitation to collaborate on the "+projectName+" project through GLookUp. To stay in contact with "+(senderName.split(' '))[0]+ ", you can reach them at "+senderEmail+". Thank you, and Happy collaboration!\n\nBest regards,\nGLookUp"
    };
    
    return this.http.post<StudentData>(this.url, requestData);
  }

  sendRejectInvitationEmail(receiverName: string, receiverEmail: string, senderName: string, senderEmail: string, projectName: string, projectDescription: string, projectMessage: string) {
    const requestData = {
      "to": receiverEmail,
      "subject": "GLookUp | Collaboration Rejected from "+senderName,
      "body": "Hey "+receiverName+",\n\n"+senderName+" has rejected your invitation to collaborate on the "+projectName+" project through GLookUp.\n\nBest regards,\nGLookUp"
    };
    
    return this.http.post<StudentData>(this.url, requestData);
  }

  sendApprovalEmail(receiverName: string, receiverEmail: string) {
    const requestData = {
      "to": receiverEmail,
      "subject": "GLookUp | Approved Account ",
      "body": "Hey "+receiverName+",\n\n"+"Your account Was approved. We would like to invite you to collaborate on a project and your rate fellow classmates through GLookUp. Thank you, and Happy collaborating and rating!\n\nBest regards,\nGLookUp"
    };

    return this.http.post(this.url, requestData);
  }

  sendDeleteEmail(receiverName: string, receiverEmail: string) {
    const requestData = {
      "to": receiverEmail,
      "subject": "GLookUp | Account Deleted ",
      "body": "Hey "+receiverName+",\n\n"+"Your account Was Deleted. We would like to thank you for all the ratings and collaborations through GLookUp. Thank you, Goodluck in your future!\n\nBest regards,\nGLookUp"
    };

    return this.http.post(this.url, requestData);
  }
}
