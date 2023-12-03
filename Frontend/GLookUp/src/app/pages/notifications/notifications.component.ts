import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/models/Project/project.model';
import { StudentData } from 'src/app/models/Student/student.model';
import { ProjectService } from 'src/app/services/project/project.service';
import { StudentService } from 'src/app/services/student/student.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent {

  studentId: number = 0
  studentLoggedIn?: StudentData
  pendingProjects: Project[] = []

  constructor(private route: ActivatedRoute, private router: Router, private studentService: StudentService, private projectService: ProjectService) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.studentId = params['loggedIn'];

      this.studentService.getStudentById(this.studentId).subscribe({
        next: (response) => {
          this.studentLoggedIn = response;
        }
      });
    });

    this.projectService.getProjects(this.studentId).subscribe({
      next: (response) => {
        this.pendingProjects = response.filter(project => project.status === 'pending');
      }
    });
  }

  onCheckboxChange(projectId: number): void {
    this.projectService.markDone(projectId).subscribe();
    location.reload();
  }
}
