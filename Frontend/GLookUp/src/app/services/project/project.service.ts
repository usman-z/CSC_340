import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from 'src/app/models/Project/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

    baseUrl: string = 'http://localhost:8080/project'

    constructor(private http: HttpClient) {}

    getProjects(studentId: number) {
        const url = `${this.baseUrl}/get/${studentId}`;
        return this.http.get<Project[]>(url);
    }

    newProject(studentA: number, studentB: number, projectName: string, projectStatus: string) {
        const url = `${this.baseUrl}/add`;
    
        const requestData = {
            "collaboratorA": studentA,
            "collaboratorB": studentB,
            "projectName": projectName,
            "status": projectStatus
        };
    
        return this.http.post(url, requestData);
    }
}