import { Component } from '@angular/core';
import { AdminService } from 'src/app/services/admin/admin.service';
import { StudentService } from 'src/app/services/student/student.service';


@Component({
  selector: 'app-approve-view',
  templateUrl: './approve-view.component.html',
  styleUrls: ['./approve-view.component.scss']
})
export class ApproveViewComponent {
  admins: any[] = [];
  student: any[] = [];

  constructor(private studentService: StudentService, private adminService: AdminService) {}

  ngOnInit() {
    this.adminService.getAllAdmin().subscribe(
      (response: any) => {
        this.admins = response as any[];
      }
    );

    this.studentService.getAllStudent().subscribe(
      (response: any) => {
        this.student = response as any[];
      }
    );
  }

  approve(): void {
    
  }
}