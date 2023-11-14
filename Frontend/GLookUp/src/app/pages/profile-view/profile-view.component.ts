import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GithubRepositorys, GithubUser } from 'src/app/models/Github/github.model';
import { GithubService } from 'src/app/services/github/github.service';
import { Location } from '@angular/common';
import { StudentService } from 'src/app/services/student/student.service';
import { AdminService } from 'src/app/services/admin/admin.service';


@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss']
})
export class ProfileViewComponent{

  loggedInName: string = '';
  studentData: any = {};
  githubUserData?: GithubUser;
  githubRepositorys?: GithubRepositorys;
  githubId: string = ''
  errorMessage: string = ''
  searchName: string = ''

  constructor(private route: ActivatedRoute, private studentService: StudentService, private adminService: AdminService, private githubService: GithubService, private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.searchName = params['search'];
      this.loggedInName = params['loggedIn'];

      this.studentService.getStudentByName(this.searchName).subscribe({
        next: (response) => {
          this.studentData = response;
          this.githubId = this.studentData.githubId;
          this.getGithubAccount(this.studentData.githubId)
        }
      });
    });
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
    this.studentService.getStudentByName(this.loggedInName).subscribe({
      next: (response) => {
        if (response != null) {
          this.router.navigate(['/rate'], {
            queryParams: { rate: this.searchName, loggedIn: this.loggedInName }
          }).catch(error => {
            console.error('Navigation error:', error);
          });
        }
      },
      error: (error) => {
        this.errorMessage = 'Must be logged in as a Student';
      }
    });
  }

   collaborate() {
    this.studentService.getStudentByName(this.loggedInName).subscribe({
      next: (response) => {
        if (response != null) {
          this.router.navigate(['/collaborate'], {
            queryParams: { collaborate: this.searchName, loggedIn: this.loggedInName }
          }).catch(error => {
            console.error('Navigation error:', error);
          });
        }
      },
      error: (error) => {
        this.errorMessage = 'Must be logged in as a Student';
      }
    });
   }
}