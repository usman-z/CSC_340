import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { StudentData } from 'src/app/models/Student/student.model';
import { StudentService } from 'src/app/services/student/student.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  @Input() studentId: number = 0
  @Input() loggedIn: string = '';
  student?: StudentData

  constructor(private studentService: StudentService, private router: Router) {}

  ngOnInit() {
    this.studentService.getStudentById(this.studentId).subscribe({
      next: (response) => {
        this.student  = response;
      }
    });
  }

  openProfile() {
    this.router.navigate(['/profile'], {
      queryParams: { search: this.studentId, loggedIn: this.loggedIn }
    }).catch(error => {
      console.error('Navigation error:', error);
    });
  }

}
