import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/_services/auth.service';
import { ToolService } from 'src/app/_services/tool.service';

@Component({
  selector: 'app-your-tools',
  templateUrl: './your-tools.component.html',
  styleUrls: ['./your-tools.component.scss']
})
export class YourToolsComponent implements OnInit {
  tools: any;
  constructor(public toolService: ToolService, public toastr: ToastrService,
    public authService: AuthService) { }

  ngOnInit() {
    this.getRenterTools();
  }

  getRenterTools() {
    this.toolService.getRenterTools(this.authService.decodedToken.nameid).subscribe(res => {
      console.log(res);
      this.tools = res;
    }, error => {
      console.log(error);
      this.toastr.error('Error retrieving renter tools');
    })
  }

  toolsInOperations() {
    return this.tools.filter(t => t.operationId !== null);
  }

  freeTools() {
    return this.tools.filter(t => t.operationId === null);
  }

  countOperationTime(operation: any): number {
    var time = new Date().getTime() - new Date(operation.startDate).getTime();
    time = time/3600000;
    // console.log(time.toFixed(2));
    return time;
  }
  countCurrentPrice(tool: any) {
    var time = this.countOperationTime(tool.operation);
    var pricePerHour = tool.rentalPrice;
    return (time * pricePerHour);
  }

  deleteTool(tool: any) {
    this.toolService.deleteTool(tool.toolId).subscribe(res => {
      console.log(res);
      this.toastr.success('Tool succsessfully deleted');
      this.getRenterTools();
    }, error => {
      console.log(error);
      this.toastr.error('Error deleting tool');
    });
  }
}
