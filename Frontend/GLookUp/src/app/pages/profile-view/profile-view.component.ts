import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GithubRepositorys, GithubUser } from 'src/app/models/Github/github.model';
import { GithubService } from 'src/app/services/github/github.service';
import { StudentService } from 'src/app/services/student/student.service';
import { AdminService } from 'src/app/services/admin/admin.service';
import { ProjectService } from 'src/app/services/project/project.service';
import { StudentData } from 'src/app/models/Student/student.model';
import { EmailService } from 'src/app/services/email/email.service';


@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss']
})
export class ProfileViewComponent{

  loggedIn: string = ''
  studentData: any = {};
  githubUserData?: GithubUser;
  githubRepositorys?: GithubRepositorys;
  githubId: string = ''
  errorMessage: string = ''
  searchId: number = 0
  numberOfCollaborators: number = 0
  collaboratorNames: string[] = []
  isCollaboratorListVisible = false;

  constructor(private emailService: EmailService, private route: ActivatedRoute, private studentService: StudentService, private adminService: AdminService, private githubService: GithubService, private router: Router, private projectService: ProjectService) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.searchId = params['search'];
      this.loggedIn = params['loggedIn'];

      this.studentService.getStudentById(this.searchId).subscribe({
        next: (response) => {
          this.studentData = response;
          this.githubId = this.studentData.githubId;
          this.getGithubAccount(this.studentData.githubId)
        }
      });
    });

    this.projectService.getCollaborators(this.searchId).subscribe({
      next: (response) => {
        this.numberOfCollaborators = response.length
        for(let studentId of response) {
          this.studentService.getStudentById(studentId).subscribe({
            next: (response) => {
              this.collaboratorNames.push(response.name);
            }
          });
        }
      }
    });
  }

  showCollaboratorList() {
    this.isCollaboratorListVisible = true;
  }

  hideCollaboratorList() {
    this.isCollaboratorListVisible = false;
  }

  private getGithubAccount(githubId: string) {
    if (githubId != null) {
      this.githubService.getGithubUser(githubId).subscribe({
        next: (response) => {
          this.githubUserData = response;
          this.getGithubRepositorys(githubId);
        },
        error: () => {
          console.log("ERR! getGithubAccount failed")
        }
      });
    }
  }

  private getGithubRepositorys(githubId: string) {
    this.githubService.getGithubRepos(githubId).subscribe({
      next: (response) => {
        this.githubRepositorys = response;
      },
      error: () => {
        console.log("ERR! githubRepositorys failed")
      }
    });
  }

  routeToGithub() {
    window.open('https://github.com/'+this.githubId, '_blank');
  }

  rateStudent() {
    if (this.loggedIn != '') {
      this.studentService.getStudentById(this.searchId).subscribe({
        next: (response) => {
          if (response != null) {
            this.router.navigate(['/rate'], {
              queryParams: { rate: this.searchId, loggedIn: this.loggedIn }
            }).catch(error => {
              console.error('Navigation error:', error);
            });
          }
        },
        error: (error) => {
          this.errorMessage = 'Must be logged in as a Student to rate';
        }
      });
    }
    else {
      this.errorMessage = 'Must be logged in as a Student to rate';
    }
  }

   collaborate() {
    if (this.loggedIn != '') {
      this.studentService.getStudentById(this.searchId).subscribe({
        next: (response) => {
          if (response != null) {
            this.router.navigate(['/collaborate'], {
              queryParams: { collaborate: this.searchId, loggedIn: this.loggedIn }
            }).catch(error => {
              console.error('Navigation error:', error);
            });
          }
        },
        error: (error) => {
          this.errorMessage = 'Must be logged in as a Student to collaborate';
        }
      });
    }
    else {
      this.errorMessage = 'Must be logged in as a Student to collaborate';
    }
   }

   deleteStudent() {
    const confirmation = window.confirm('Are you sure you want to delete this student?');
  
    if (confirmation) {
      this.studentService.deleteStudent(this.studentData,this.studentData.id).subscribe();
      this.emailService.sendDeleteEmail(this.studentData.name,this.studentData.email).subscribe();
      this.router.navigate(['/feedback'], {
        queryParams: { loggedIn: "Admin", response: "Deleted successfully" }
      }).catch(error => {
        console.error('Navigation error:', error);
      });
    } else {
    }
  }
}
