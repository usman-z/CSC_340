import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GithubRepositorys, GithubUser } from 'src/app/models/Github/github.model';
import { GithubService } from 'src/app/services/github/github.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  
  studentData: any; // Use 'any' type temporarily for debugging
  githubUserData?: GithubUser;
  githubRepositorys?: GithubRepositorys;
  githubId: string = ''

  constructor(private route: ActivatedRoute, private githubService: GithubService, private router: Router) {}

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

  navigateTo() {
    this.router.navigate(['/']).catch(error => {
      console.error('Navigation error:', error);
    });
  }
}
