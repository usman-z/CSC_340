import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmailInformation } from 'src/app/models/EmailInfo/EmailInfomation.model';
import { Project } from 'src/app/models/Project/project.model';
import { StudentData } from 'src/app/models/Student/student.model';
import { EmailService } from 'src/app/services/email/email.service';
import { ProjectService } from 'src/app/services/project/project.service';
import { StudentService } from 'src/app/services/student/student.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent {

  studentId: number = 0
  studentLoggedIn?: StudentData
  pendingProjects: Project[] = []
  names: String[] = []
  activeProjects: Project[] = []
  pastProjects: Project[] = []

  constructor(private route: ActivatedRoute, private router: Router, private studentService: StudentService, private projectService: ProjectService, private emailService: EmailService) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.studentId = params['loggedIn'];

      this.studentService.getStudentById(this.studentId).subscribe({
        next: (response) => {
          this.studentLoggedIn = response;
        }
      });
    });

    this.projectService.getProjects(this.studentId).subscribe({
      next: (response) => {
        this.pendingProjects = response.filter(project => project.status === 'pending' && this.studentId != project.creatorId);
        this.activeProjects = response.filter(project => project.status === 'active');
        this.pastProjects = response.filter(project => project.status === 'done');
      }
    });
  }

  onAcceptCollaboration(projectId: number, collaboratorId: number, projectName: string): void {
    this.projectService.markActive(projectId).subscribe();
    location.reload();

    this.studentService.getEmailInfo(this.studentId, collaboratorId).subscribe({
      next: (response: EmailInformation) => {
        const info = response;
        this.emailService.sendAcceptInvitationEmail(info.receiverName, info.receiverEmail, info.senderName, info.senderEmail, projectName).subscribe();
      }
    });
  }

  onProjectDone(projectId: number) {
    this.projectService.markDone(projectId).subscribe();
    location.reload();
  }

  onRejectCollaboration(projectId: number, collaboratorId: number, projectName: string): void {
    this.projectService.deleteProject(projectId).subscribe();
    location.reload();

    this.studentService.getEmailInfo(this.studentId, collaboratorId).subscribe({
      next: (response: EmailInformation) => {
        const info = response;
        this.emailService.sendRejectInvitationEmail(info.receiverName, info.receiverEmail, info.senderName, projectName).subscribe();
      }
    });
  }

  goProfile(collaboratorId: number) {
    this.router.navigate(['/profile'], {
      queryParams: { search: collaboratorId, loggedIn: this.studentId }
    }).catch(error => {
      console.error('Navigation error:', error);
    });
  }

  collaborate(collaboratorId: number) {
    this.router.navigate(['/collaborate'], {
      queryParams: { collaborate: collaboratorId, loggedIn: this.studentId }
    }).catch(error => {
      console.error('Navigation error:', error);
    });
  }
}
