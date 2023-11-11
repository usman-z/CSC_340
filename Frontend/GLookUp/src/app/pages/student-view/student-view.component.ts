import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.scss']
})
export class StudentViewComponent {

  studentData: any;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const studentDataString = params['studentData'];

      if (studentDataString) {
        try {
          this.studentData = JSON.parse(studentDataString);
        } catch (error) {
          this.studentData = null;
        }
      }
      else {
        console.log("ERR! studentDataString")
      }
    });
  }

  logOut() {
    this.router.navigate(['/']).catch(error => {
      console.error('Navigation error:', error);
    });
  }

  myProfile() {
    this.router.navigate(['/user']).catch(error => {
      console.error('Navigation error:', error);
    });
  }

}
