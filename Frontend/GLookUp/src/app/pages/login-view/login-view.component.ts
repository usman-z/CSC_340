import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin/admin.service';
import { StudentService } from 'src/app/services/student/student.service';
import { StudentData } from '../../models/Student/student.model';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss']
})
export class LoginViewComponent {

  username: string = ''
  password: string = ''
  errorMessage: string = ''

  constructor(private router: Router, private studentService: StudentService, private adminService: AdminService) {}

  navigateTo() {
    this.router.navigate(['/']).catch(error => {
      console.error('Navigation error:', error);
    });
  }

  login() {
    if (this.username !== '' && this.password !== '') {
      this.studentService.searchStudent(this.username, this.password).subscribe({
        next: (response) => {
          const student = response;
          this.router.navigate(['/studentView'], {
            queryParams: { studentData: JSON.stringify(student) }
          }).catch(error => {
            console.error('Navigation error:', error);
          });
        },
        error: (error) => {
          this.errorMessage = 'Incorrect login credentials, try again';
        }
      });
    }
  }

}
