import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GithubRepositorys, GithubUser } from 'src/app/models/Github/github.model';
import { GithubService } from 'src/app/services/github/github.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss']
})
export class ProfileViewComponent {
  
  studentData: any; // Use 'any' type temporarily for debugging
  githubUserData?: GithubUser;
  githubRepositorys?: GithubRepositorys;
  githubId: string = ''

  constructor(private route: ActivatedRoute, private location: Location, private githubService: GithubService, private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const studentDataString = params['studentData'];

      if (studentDataString) {
        try {
          this.studentData = JSON.parse(studentDataString);
          this.githubId = this.studentData.githubId;
          this.getGithubAccount(this.studentData.githubId);
        } catch (error) {
          this.studentData = null;
        }
      }
      else {
        console.log("ERR! studentDataString")
      }
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
}
