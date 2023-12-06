import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GithubUser } from 'src/app/models/Github/github.model';
import { GithubRepositorys } from 'src/app/models/Github/github.model';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private githubApi = 'https://api.github.com/users/';
  
  constructor(private https: HttpClient) {}

  getGithubUser(id: string): Observable<GithubUser> {
    const apiUrl = `${this.githubApi}${id}`;
    return this.https.get<GithubUser>(apiUrl);
  }

  getGithubRepos(id: string): Observable<GithubRepositorys> {
    const url = '/repos'
    const apiUrl = `${this.githubApi}${id}${url}`;
    return this.https.get<GithubRepositorys>(apiUrl);
  }

  getGithubRepoLanguages(githubId: string, githubRepository: string) {
    const baseUrl = 'https://api.github.com/repos/'
    const repo = '/'+githubRepository;
    const url = '/languages';
    const apiUrl = `${baseUrl}${githubId}${repo}${url}`;
    return this.https.get(apiUrl);
  }
}
