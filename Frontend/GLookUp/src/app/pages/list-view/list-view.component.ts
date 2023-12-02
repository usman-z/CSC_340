import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentData } from 'src/app/models/Student/student.model';
import { StudentService } from 'src/app/services/student/student.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent {

  studentData?: StudentData[]; 
  searchName: string = ''
  loggedIn: string = ''
  resultsFound: boolean = false

  constructor(private route: ActivatedRoute, private router: Router, private studentService: StudentService) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.searchName = params['search'];
      this.loggedIn = params['loggedIn'];

      this.studentService.getStudentsByName(this.searchName).subscribe({
        next: (response) => {
          this.studentData = response;
          for (let student of response) {
            if(student.approved == true){
              this.resultsFound = true
            }
          }
        }
      });
    });
  }

}
