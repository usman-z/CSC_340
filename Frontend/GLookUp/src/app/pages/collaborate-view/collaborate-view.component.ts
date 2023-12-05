import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmailInformation } from 'src/app/models/EmailInfo/EmailInfomation.model';
import { Project } from 'src/app/models/Project/project.model';
import { StudentData } from 'src/app/models/Student/student.model';
import { EmailService } from 'src/app/services/email/email.service';
import { ProjectService } from 'src/app/services/project/project.service';
import { StudentService } from 'src/app/services/student/student.service';

@Component({
  selector: 'app-collaborate-view',
  templateUrl: './collaborate-view.component.html',
  styleUrls: ['./collaborate-view.component.scss']
})
export class CollaborateViewComponent {

  loggedIn: number = 0
  collaborateWith: number = 0
  receiver?: StudentData
  pendingProjects: Project[] = []
  completedProjects: Project[] = []

  projectName: string = ''
  projectMessage: string = ''

  constructor(private route: ActivatedRoute, private emailService: EmailService, private studentService: StudentService, private router: Router, private projectService: ProjectService) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.collaborateWith = params['collaborate'];
      this.loggedIn = params['loggedIn'];

      this.projectService.getProjects(this.loggedIn).subscribe({
        next: (response) => {
          this.pendingProjects = response.filter(project => project.status === 'pending' && this.collaborateWith == project.collaborator);
          this.completedProjects = response.filter(project => project.status === 'done' && this.collaborateWith == project.collaborator);
        }
      });
    });
  }

  onSubmit() {
    this.studentService.getEmailInfo(this.loggedIn, this.collaborateWith).subscribe({
      next: (response: EmailInformation) => {
        const info = response;

        this.emailService.sendCollaborationEmail(info.receiverName, info.receiverEmail, info.senderName, info.senderEmail, this.projectName, this.projectMessage).subscribe({
          next: (response) => {
            
          }
        });
      }
    });

    this.projectService.newProject(this.loggedIn, this.collaborateWith,this.loggedIn, this.projectName, 'pending').subscribe();
    location.reload();
  }

  viewProfile(collaboratorId: number) {
    this.router.navigate(['/profile'], {
      queryParams: { search: collaboratorId, loggedIn: this.loggedIn }
    });
  }

  goHome() {
    this.router.navigate(['/studentView'], {
      queryParams: { loggedIn: this.loggedIn }
    }).catch(error => {
      console.error('Navigation error:', error);
    });
  }
}
