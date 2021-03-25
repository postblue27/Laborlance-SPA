import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  baseUrl = environment.apiUrl + 'order';
  constructor(private http: HttpClient) { }

  createOrder(model: any) {
    return this.http.post(this.baseUrl + '/create-order', model);
  }

}
