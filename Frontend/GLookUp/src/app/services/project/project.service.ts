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

    newProject(studentA: number, studentB: number, creatorId: number, projectName: string, projectStatus: string) {
        const url = `${this.baseUrl}/add`;
    
        const requestData = {
            "creatorId": creatorId,
            "collaboratorA": studentA,
            "collaboratorB": studentB,
            "projectName": projectName,
            "status": projectStatus
        };
    
        return this.http.post(url, requestData);
    }

    markDone(projectId: number) {
        const url = `${this.baseUrl}/done/${projectId}`;
        return this.http.get<Project>(url);
    }

    deleteProject(projectId: number) {
        const url = `${this.baseUrl}/delete/${projectId}`;
        return this.http.get(url);
    }

    getCollaborators(studentId: number) {
        const url = `${this.baseUrl}/collaborators/${studentId}`;
        return this.http.get<number[]>(url);
    }
}