import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ToolService {

  baseUrl = environment.apiUrl + 'tool';
  constructor(private http: HttpClient) { }

  addTool(model: any) {
    return this.http.post(this.baseUrl + '/add-tool', model);
  }

  getRenterTools(renterId: any) {
    return this.http.get(this.baseUrl + '/get-renter-tools/' + renterId);
  }

  deleteTool(toolId: any) {
    return this.http.delete(this.baseUrl + '/delete-tool/' + toolId);
  }

  getAllTools() {
    return this.http.get(this.baseUrl + '/get-all-tools')
  }

  getToolById(toolId: any) {
    return this.http.get(this.baseUrl + '/get-tool-by-id/' + toolId);
  }

  deleteToolImage(publicId: any) {
    return this.http.delete(this.baseUrl + '/delete-tool-image/' + publicId);
  }

  addNewToolImages(form: any) {
    return this.http.post(this.baseUrl + '/add-new-tool-images', form);
  }
}
