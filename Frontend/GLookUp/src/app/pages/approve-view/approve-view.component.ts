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
        this.admins = response.map((admin: any) => ({ ...admin, selected: false }));
      }
    );

    this.studentService.getAllStudent().subscribe(
      (response: any) => {
        this.student = response.map((student: any) => ({ ...student, selected: false }));
      }
    );
  }

  approve(): void {
    const selectedAdmins = this.admins.filter(admin => admin.selected);
    const selectedStudents = this.student.filter(student => student.selected);

    // backend supports batch updates, you can iterate over the selected admins
    for (const admin of selectedAdmins) {
      const adminId = admin.id;
      this.adminService.updateAdminApprovalStatus(admin,adminId).subscribe(
        () => {
          console.log(`Admin with ID ${adminId} approved successfully.`);
        },
        (error) => {
          console.error(`Error approving admin with ID ${adminId}: ${error}`);
          // Handle error as needed.
        }
      );
    }

    for (const student of selectedStudents) {
      const studentId = student.id;
      this.studentService.updateStudentApprovalStatus(studentId).subscribe(
        () => {
          console.log(`Student with ID ${studentId} approved successfully.`);
        },
        (error) => {
          console.error(`Error approving student with ID ${studentId}: ${error}`);
        }
      );
    }
  }
}