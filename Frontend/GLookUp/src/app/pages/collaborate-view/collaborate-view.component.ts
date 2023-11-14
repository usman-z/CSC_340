import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentData } from 'src/app/models/Student/student.model';
import { EmailService } from 'src/app/services/email/email.service';
import { StudentService } from 'src/app/services/student/student.service';

@Component({
  selector: 'app-collaborate-view',
  templateUrl: './collaborate-view.component.html',
  styleUrls: ['./collaborate-view.component.scss']
})
export class CollaborateViewComponent {

  loggedIn: string = ''
  collaborateWith: string = ''
  receiver?: StudentData
  sender?: StudentData
  info: string = "Sending Invitation to Collaborate..."
  requestSent: string = 'False';

  constructor(private route: ActivatedRoute, private emailService: EmailService, private studentService: StudentService, private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.collaborateWith = params['collaborate'];
      this.loggedIn = params['loggedIn'];
    });

    const sent = localStorage.getItem(this.requestSent);

    if (sent == 'False') {
        this.info = 'Collaboration request pending';
        return;
    }

    this.sendEmail();

    localStorage.setItem(this.requestSent, 'True');
  }

  private sendEmail() {
    this.studentService.getStudentByName(this.loggedIn).subscribe({
      next: (response) => {
        const sender = response;
        this.studentService.getStudentByName(this.collaborateWith).subscribe({
          next: (response) => {
            const receiver = response;
            this.emailService.sendEmail(receiver.name, receiver.email, sender.name, sender.email).subscribe({
              next: (response) => {
                this.info = 'Collaboration request sent';
              },
              error: (error) => {
                console.log('ERROR');
              }
            });
          }
        });
      }
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
