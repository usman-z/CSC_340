import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { StudentData } from 'src/app/models/Student/student.model';
import { StudentService } from 'src/app/services/student/student.service';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent {

  title = 'GLookUp';
  student?: StudentData[];
  studentName: string = '';
  errorMessage: string = ''

  constructor(private router: Router, private studentService: StudentService) {}

  searchStudent() {
    if (this.studentName.trim() !== '') {
      this.router.navigate(['/search'], {
        queryParams: { search: this.studentName, loggedIn: '' }
      }).catch(error => {
        console.error('Navigation error:', error);
      });
    }
  }

  login() {
    this.router.navigate(['/login']).catch(error => {
      console.error('Navigation error:', error);
    });
  }

  signup() {
    this.router.navigate(['/signup']).catch(error => {
      console.error('Navigation error:', error);
    });
  }
}
