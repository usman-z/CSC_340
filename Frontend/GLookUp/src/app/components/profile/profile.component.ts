import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  studentData: any; // Use 'any' type temporarily for debugging

  constructor(private route: ActivatedRoute) {}

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
}
