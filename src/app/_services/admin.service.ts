import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  baseUrl = environment.apiUrl + 'admin';
  constructor(private http: HttpClient) { }


  getUsersByRole(roleName: any) {
    return this.http.get(this.baseUrl + '/get-users-by-role/' + roleName);
  }
  updateUser(data: any) {
    return this.http.post(this.baseUrl + '/update-user', data);
  }
  updateWorker(data: any) {
    return this.http.post(this.baseUrl + '/update-worker', data);
  }
  deleteUser(data: any) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
    }),
      body: data
    };
    return this.http.delete(this.baseUrl + '/delete-user', options);
  }
}
