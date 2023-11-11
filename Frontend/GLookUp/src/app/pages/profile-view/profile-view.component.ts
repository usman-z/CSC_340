import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GithubRepositorys, GithubUser } from 'src/app/models/Github/github.model';
import { GithubService } from 'src/app/services/github/github.service';
import { Location } from '@angular/common';
import { StudentService } from 'src/app/services/student/student.service';


@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss']
})
export class ProfileViewComponent{
  
  studentData: any = {};
  githubUserData?: GithubUser;
  githubRepositorys?: GithubRepositorys;
  githubId: string = ''

  constructor(private route: ActivatedRoute, private location: Location, private studentService: StudentService, private githubService: GithubService, private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const name = params['name'];

      this.studentService.getStudentByName(name).subscribe({
        next: (response) => {
          this.studentData = response;
          this.getGithubAccount(this.studentData.githubId)
        }
      });
    });
  }

  private getGithubAccount(githubId: string) {
    this.githubService.getGithubUser(githubId).subscribe({
      next: (response) => {
        this.githubUserData = response;
        this.getGithubRepositorys(githubId);
      },
      error: (error) => {
        console.log("ERR! getGithubAccount failed")
      }
    });
  }

  private getGithubRepositorys(githubId: string) {
    this.githubService.getGithubRepos(githubId).subscribe({
      next: (response) => {
        this.githubRepositorys = response;
      },
      error: (error) => {
        console.log("ERR! githubRepositorys failed")
      }
    });
  }

  routeToGithub() {
    window.open('https://github.com/'+this.githubId, '_blank');
  }

  rateStudent() {
    this.router.navigate(['/rate']).catch(error => {
      console.error('Navigation error:', error);
    });
  }

  collaborate() {
    this.router.navigate(['/collaborate']).catch(error => {
      console.error('Navigation error:', error);
    });
  }
}
