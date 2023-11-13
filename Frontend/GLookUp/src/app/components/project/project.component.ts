import { Component, Input, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github/github.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit{

  @Input() repositoryName: string = '';
  @Input() createdOn: string = '';
  @Input() updatedOn: string = '';
  @Input() githubId: string = '';
  languages: any

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.githubService.getGithubRepoLanguages(this.githubId, this.repositoryName).subscribe({
      next: (response) => {
        this.languages = response;
      },
      error: (error) => {
        console.log('ERR! Failure in getting Repository languages')
      }
    });
  }

}
