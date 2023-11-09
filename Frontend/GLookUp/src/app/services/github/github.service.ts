import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    // Set up the authorization header with the bearer token
    const headers = new HttpHeaders({
      'Authorization': 'Bearer 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'
    });

    const apiUrl = `${this.githubApi}${id}`;
    return this.https.get<GithubUser>(apiUrl, { headers });
  }

  getGithubRepos(id: string): Observable<GithubRepositorys> {
    // Set up the authorization header with the bearer token
    const headers = new HttpHeaders({
      'Authorization': 'Bearer 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'
    });

    const url = '/repos'
    const apiUrl = `${this.githubApi}${id}${url}`;
    return this.https.get<GithubRepositorys>(apiUrl, { headers });
  }

  getGithubRepoLanguages(id: string) {
    // Set up the authorization header with the bearer token
    const headers = new HttpHeaders({
      'Authorization': 'Bearer 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'
    });

    const repo = '/CSC_340_Static_Web_App'
    const url = '/languages'
    const apiUrl = `${this.githubApi}${id}${repo}${url}`;
    return this.https.get<GithubRepositorys>(apiUrl, { headers });
  }
}
