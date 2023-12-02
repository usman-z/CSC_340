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
          if (student.approved == true) {
            this.router.navigate(['/studentView'], {
              queryParams: { loggedIn: student.id }
            }).catch(error => {
              console.error('Navigation error:', error);
            });
            return;
          }
          else {
            this.errorMessage = 'Incorrect login credentials!';
          }
        },
        error: (error) => {
          this.errorMessage = 'Incorrect login credentials!';
        }
      });

      this.adminService.searchAdmin(this.username, this.password).subscribe({
        next: (response) => {
          const admin = response;
          if (admin.approved == true) {
            this.router.navigate(['/adminView'], {
              queryParams: { loggedIn: 'admin' }
            }).catch(error => {
              console.error('Navigation error:', error);
            });
          }
          else {
            this.errorMessage = 'Incorrect login credentials!';
          }
        },
        error: (error) => {
          this.errorMessage = 'Incorrect login credentials!';
        }
      });
    }
  }

}
