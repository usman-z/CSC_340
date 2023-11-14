import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { AdminData } from 'src/app/models/Admin/admin.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) {}

  getAdminByName(name: string) {
    const apiUrl = 'http://localhost:8080/admin/search/';
    const url = `${apiUrl}${name}`;

    return this.http.get<AdminData>(url);
  }

  addAdmin(name: string, email: string, password: string ) {
    const url = 'http://localhost:8080/admin/add';

    const requestData = {
        "name": name,
        "email": email,
        "password": password
    };
    
    return this.http.post(url, requestData);
  }

  searchAdmin(username: string, password: string) {
    const url = 'http://localhost:8080/admin/search';

    const requestData = {
        "id": null,
        "name": null,
        "email": username,
        "password": password,
    };
    
    return this.http.post<AdminData>(url, requestData);
  }

  getAllAdmin(){
    const url = 'http://localhost:8080/admin/all';
    return this.http.get('http://localhost:8080/admin/all');
  }

  updateAdminApprovalStatus(admin: AdminData,adminId: number): Observable<any> {
    const url = `http://localhost:8080/admin/update/${adminId}`;
    
    // Fetch the existing admin data first
    return this.getAdminById(adminId).pipe(
      switchMap((existingAdmin: AdminData) => {
        // Update the approval status
        existingAdmin.approved = true;

        // Send the updated Admin object to the server
        return this.http.post(url, existingAdmin);
      })
    );
  }


  private getAdminById(adminId: number): Observable<AdminData> {
    const url = `http://localhost:8080/admin/get/${adminId}`;
    return this.http.get<AdminData>(url);
  }

}
