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

  loggedIn: string = ''
  studentData: any = {};
  githubUserData?: GithubUser;
  githubRepositorys?: GithubRepositorys;
  githubId: string = ''
  errorMessage: string = ''
  searchId: number = 0

  constructor(private route: ActivatedRoute, private studentService: StudentService, private adminService: AdminService, private githubService: GithubService, private router: Router) {}

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
    this.studentService.deleteStudent(this.studentData,this.studentData.id).subscribe(
      () => {
        console.log(`Student with ID ${this.studentData.id} rejected successfully.`);
      },
      (error) => {
        console.error(`Error rejecting student with ID ${this.studentData.id}: ${error}`);
      }
    );

    this.router.navigate(['/feedback'], {
      queryParams: { loggedIn: "Admin", response: "Deleted successfully" }
    }).catch(error => {
      console.error('Navigation error:', error);
    });
   }
}
