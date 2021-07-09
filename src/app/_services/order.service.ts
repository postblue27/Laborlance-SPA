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

  getCustomerOrders(customerId: any) {
    return this.http.get(this.baseUrl + '/get-customer-orders/' + customerId);
  }

  deleteOrder(orderId: any) {
    return this.http.delete(this.baseUrl + '/delete-order/' + orderId);
  }

  getOrderById(orderId: any) {
    return this.http.get(this.baseUrl + '/get-order-by-id/' + orderId);
  }

  getOrderProposalsWithTools(orderId: any) {
    return this.http.get(this.baseUrl + '/get-order-proposals-with-tools/' + orderId);
  }
  
  getOrdersBySearchString(searchString: any) {
    return this.http.get(this.baseUrl + '/get-orders-by-search-string/' + searchString);
  }
  getAllOrders() {
    return this.http.get(this.baseUrl + '/get-all-orders');
  }
}
