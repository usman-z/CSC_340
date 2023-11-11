import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student/student.service';

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

  constructor(private studentService: StudentService, private router: Router) {}

  onRoleChange(role: string) {
    this.selectedRole = role;
  }

  onSubmitStudent() {
      this.studentService.addStudent(this.name, this.email, this.password, this.github).subscribe(
        response => {
          this.router.navigate(['/']).catch(error => {
            console.error('Navigation error:', error);
          });
        }
      );
  }

  onSubmitAdmin() {
    // TODO
  }
}
