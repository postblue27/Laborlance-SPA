import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OperationService {
  baseUrl = environment.apiUrl + 'operation';
  constructor(private http: HttpClient) { }

  createOperation(proposalId: any) {
    return this.http.post(this.baseUrl + '/create-operation/' + proposalId, '');
  }

  getCustomerOperations(customerId: any) {
    return this.http.get(this.baseUrl + '/get-customer-operations/' + customerId);
  }

  getWorkerOperations(workerId: any) {
    return this.http.get(this.baseUrl + '/get-worker-operations/' + workerId);
  }
  closeOperation(operationId: any, finalCost: any) {
    return this.http.post(this.baseUrl + '/close-operation/' + operationId + '/' + finalCost, '');
  }
}
