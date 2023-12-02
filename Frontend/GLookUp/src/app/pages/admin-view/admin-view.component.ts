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
  students?: StudentData[];
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

  getStudentByName(name: string) {
    this.router.navigate(['/search'], {
      queryParams: { search: name, loggedIn: 'admin' }
    }).catch(error => {
      console.error('Navigation error:', error);
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
