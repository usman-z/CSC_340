import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
}
