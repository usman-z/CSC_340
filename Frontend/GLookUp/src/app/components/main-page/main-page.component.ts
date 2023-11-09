import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentData } from 'src/app/models/Student/student.model';
import { StudentService } from 'src/app/services/student/student.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  studentName: string = '';
  errorMessage: string = ''

  constructor(private router: Router, private studentService: StudentService) {}

  student?: StudentData;

  onSubmit(event: Event) {
    event.preventDefault();

    if (this.studentName.trim() !== '') {
      this.getStudentByName(this.studentName);
    }
  }

  private getStudentByName(name: string) {
    this.studentService.getStudentByName(name).subscribe({
      next: (response) => {
        this.student = response;
        this.router.navigate(['/profile'], {
          queryParams: { studentData: JSON.stringify(this.student) }
        }).catch(error => {
          console.error('Navigation error:', error);
        });
      },
      error: (error) => {
        this.errorMessage = 'No Student found with name of "'+name+'"';
      }
    });
  }
}
