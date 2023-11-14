import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminData } from 'src/app/models/Admin/admin.model';
import { AdminService } from 'src/app/services/admin/admin.service';
import { StudentData } from 'src/app/models/Student/student.model';
import { StudentService } from 'src/app/services/student/student.service';


@Component({
  selector: 'app-student-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.scss']
})
export class AdminViewComponent {

  adminLoggedIn?: AdminData;
  adminLoggedInName: string = '';
  studentName: string ='';
  adminName: string = '';
  admin?: AdminData;

  studentLoggedIn?: StudentData;
  studentLoggedInName: string = '';
  student?: StudentData;
  errorMessage: string = '';


  constructor(private route: ActivatedRoute, private router: Router, private adminService: AdminService, private studentService: StudentService) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const adminName = params['loggedIn'];

      this.adminService.getAdminByName(adminName).subscribe({
        next: (response) => {
          this.adminLoggedIn = response;
          this.adminLoggedInName = response.name;
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
          this.errorMessage = 'No Student found: '+name;
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
            queryParams: { search: this.student.name, loggedIn: "Admin" }
          }).catch(error => {
            console.error('Navigation error:', error);
          });
        }
      },
      error: (error) => {
        this.errorMessage = 'No Student found: '+name;
      }
    });
  }

  logOut() {
    this.router.navigate(['/']).catch(error => {
      console.error('Navigation error:', error);
    });
  }

  approve() {
    this.router.navigate(['/approve'], {}).catch(error => {
      console.error('Navigation error:', error);
    });
  }



}
