import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GithubRepositorys, GithubUser } from 'src/app/models/Github/github.model';
import { GithubService } from 'src/app/services/github/github.service';
import { ProjectService } from 'src/app/services/project/project.service';
import { StudentService } from 'src/app/services/student/student.service';


@Component({
  selector: 'app-user-profile-view',
  templateUrl: './user-profile-view.component.html',
  styleUrls: ['./user-profile-view.component.scss']
})
export class UserProfileViewComponent {
  

  loggedInName: string = '';
  studentData: any = {};
  githubUserData?: GithubUser;
  githubRepositorys?: GithubRepositorys;
  githubId: string = ''
  errorMessage: string = ''
  searchName: string = ''

  numberOfCollaborators: number = 0
  collaboratorNames: string[] = []
  isCollaboratorListVisible = false;

  constructor(private route: ActivatedRoute, private studentService: StudentService, private githubService: GithubService, private router: Router, private projectService: ProjectService) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const studentId = params['studentId'];

      this.studentService.getStudentById(studentId).subscribe({
        next: (response) => {
          this.studentData = response;
          this.githubId = this.studentData.githubId;
          this.getGithubAccount(this.studentData.githubId);
        }
      });

      this.projectService.getCollaborators(studentId).subscribe({
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
}
