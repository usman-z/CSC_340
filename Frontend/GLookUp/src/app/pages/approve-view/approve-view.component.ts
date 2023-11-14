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
        this.admins = response.filter((admin: { approved: any; }) => !admin.approved);
      }
    );

    this.studentService.getAllStudent().subscribe(
      (response: any) => {
        this.student = response.filter((student: { approved: any; }) => !student.approved);
      }
    );
  }

  approve(): void {
    const selectedAdmins = this.admins.filter(admin => admin.selected);
    const selectedStudents = this.student.filter(student => student.selected);

    //  iterate over the selected admins
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

    //  iterate over the selected students
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

    // Reset selection after approval
    this.admins.forEach(admin => (admin.selected = false));
    this.student.forEach(student => (student.selected = false));
  }

  reject(): void {
    const selectedAdmins = this.admins.filter(admin => admin.selected);
    const selectedStudents = this.student.filter(student => student.selected);

    for (const admin of selectedAdmins) {
      const adminId = admin.id;
      this.adminService.deleteAdmin(admin,adminId).subscribe(
        () => {
          console.log(`Admin with ID ${adminId} rejected successfully.`);
        },
        (error) => {
          console.error(`Error rejecting admin with ID ${adminId}: ${error}`);
          // Handle error as needed.
        }
      );
    }

    //  iterate over the selected students
    for (const student of selectedStudents) {
      const studentId = student.id;
      this.studentService.deleteStudent(student,studentId).subscribe(
        () => {
          console.log(`Student with ID ${studentId} rejected successfully.`);
        },
        (error) => {
          console.error(`Error rejecting student with ID ${studentId}: ${error}`);
        }
      );
    }

    // Reset selection after approval
    this.admins.forEach(admin => (admin.selected = false));
    this.student.forEach(student => (student.selected = false));
  }
}