import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProposalService {
  baseUrl = environment.apiUrl + 'proposal';
  constructor(private http: HttpClient) { }

  addProposal(model: any) {
    return this.http.post(this.baseUrl + '/add-proposal', model);
  }

  getWorkerProposals(workerId: any) {
    return this.http.get(this.baseUrl + '/get-worker-proposals/' + workerId);
  }
}
