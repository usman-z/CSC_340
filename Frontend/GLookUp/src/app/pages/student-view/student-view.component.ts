import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentData } from 'src/app/models/Student/student.model';
import { StudentService } from 'src/app/services/student/student.service';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.scss']
})
export class StudentViewComponent {

  studentLoggedIn?: StudentData;
  studentLoggedInName: string = '';
  studentName: string = '';
  student?: StudentData;
  errorMessage: string = '';

  constructor(private route: ActivatedRoute, private router: Router, private studentService: StudentService) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const studentName = params['name'];

      this.studentService.getStudentByName(studentName).subscribe({
        next: (response) => {
          this.studentLoggedIn = response;
          this.studentLoggedInName = response.name;
        }
      });
    });
  }

  searchStudent() {
    if (this.studentName.trim() !== '') {
      this.getStudentByName(this.studentName);
    }
  }

  private getStudentByName(name: string) {
    this.studentService.getStudentByName(name).subscribe({
      next: (response) => {
        this.student = response;
        if (!this.student.approved) {
          this.errorMessage = 'No Student found with name of "'+name+'"';
        }
        else if(name == this.studentLoggedInName) {
          this.router.navigate(['/user'], {
            queryParams: { name: this.student.name }
          }).catch(error => {
            console.error('Navigation error:', error);
          });
        }
        else{
          this.router.navigate(['/profile'], {
            queryParams: { search: this.student.name, loggedIn: this.studentLoggedInName }
          }).catch(error => {
            console.error('Navigation error:', error);
          });
        }
      },
      error: (error) => {
        this.errorMessage = 'No Student found with name of "'+name+'"';
      }
    });
  }

  logOut() {
    this.router.navigate(['/']).catch(error => {
      console.error('Navigation error:', error);
    });
  }

  myProfile() {
    this.router.navigate(['/user'], {
      queryParams: { name: this.studentLoggedInName }
    }).catch(error => {
      console.error('Navigation error:', error);
    });
  }

}
