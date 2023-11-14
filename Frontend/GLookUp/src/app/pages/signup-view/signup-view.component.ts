import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student/student.service';
import { AdminService } from 'src/app/services/admin/admin.service';


@Component({
  selector: 'app-signup-view',
  templateUrl: './signup-view.component.html',
  styleUrls: ['./signup-view.component.scss']
})
export class SignupViewComponent {
  selectedRole: string = 'student';

  name: string = ''
  email: string = ''
  github: string = ''
  password: string = ''
  error: string = ''

  constructor(private adminService: AdminService, private studentService: StudentService, private router: Router) {}

  

  onRoleChange(role: string) {
    this.selectedRole = role;
  }

  onSubmitAdmin() {
    if (this.name != '' && this.email != '' && this.password != ''){
      this.adminService.addAdmin(this.name, this.email, this.password).subscribe(
        response => {
          this.router.navigate(['/']).catch(error => {
            console.error('Navigation error:', error);
          });
        }
      );
    }
    else {
      this.error = 'All information is Required!'
    }
  }

  onSubmitStudent() {
    if (this.name != '' && this.github != '' && this.password != '' && this.email != ''){
      this.studentService.addStudent(this.name, this.email, this.password, this.github).subscribe(
        response => {
          this.router.navigate(['/']).catch(error => {
            console.error('Navigation error:', error);
          });
        }
      );
    }
    else {
      this.error = 'All information is Required!'
    }
  }

}
