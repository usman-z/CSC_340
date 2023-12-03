import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/models/Project/project.model';
import { StudentData } from 'src/app/models/Student/student.model';
import { ProjectService } from 'src/app/services/project/project.service';
import { StudentService } from 'src/app/services/student/student.service';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.scss']
})
export class StudentViewComponent {

  studentLoggedIn?: StudentData;
  studentLoggedInId: number = 0;
  studentId: number = 0
  studentName: string = '';
  student?: StudentData;
  errorMessage: string = '';
  pendingProjects: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private studentService: StudentService, private projectService: ProjectService) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.studentId = params['loggedIn'];

      this.studentService.getStudentById(this.studentId).subscribe({
        next: (response) => {
          this.studentLoggedIn = response;
          this.studentLoggedInId = response.id;
        }
      });
    });

    this.projectService.getProjects(this.studentId).subscribe({
      next: (response) => {
        let projects = response.filter(project => project.status === 'pending');
        if (projects.length > 0){
          this.pendingProjects = true;
        }
      }
    });
  }

  searchStudent() {
    if (this.studentName.trim() !== '') {
      this.router.navigate(['/search'], {
        queryParams: { search: this.studentName, loggedIn: this.studentId }
      }).catch(error => {
        console.error('Navigation error:', error);
      });
    }
    else {
      this.router.navigate(['/search'], {
        queryParams: { search: 'all', loggedIn: '' }
      });
    }
  }

  showNotifications() {
    this.router.navigate(['/notifications'], {
      queryParams: { loggedIn: this.studentId }
    });
  }

  logOut() {
    this.router.navigate(['/']).catch(error => {
      console.error('Navigation error:', error);
    });
  }

  myProfile() {
    this.router.navigate(['/user'], {
      queryParams: { studentId: this.studentLoggedInId }
    }).catch(error => {
      console.error('Navigation error:', error);
    });
  }

}
