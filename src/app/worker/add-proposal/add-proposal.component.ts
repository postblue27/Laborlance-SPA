import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/_services/auth.service';
import { OperationService } from 'src/app/_services/operation.service';
import { OrderService } from 'src/app/_services/order.service';
import { ProposalService } from 'src/app/_services/proposal.service';
import { ToolService } from 'src/app/_services/tool.service';

@Component({
  selector: 'app-add-proposal',
  templateUrl: './add-proposal.component.html',
  styleUrls: ['./add-proposal.component.scss']
})
export class AddProposalComponent implements OnInit {
  order: any;
  tools: any;
  toolsInProposal: Array<any> = [];
  toolsFromSearch: any;
  toolsSearchString: any;
  constructor(private orderSerice: OrderService, private route: ActivatedRoute, private operationService: OperationService,
    public toolService: ToolService, public toastr: ToastrService, public authService: AuthService, 
      public proposalService: ProposalService) { }

  ngOnInit() {
    this.route.data.subscribe(response => {
      this.order = response.data;
      console.log(this.order);
    }, error => {
      console.log(error);
    });
    this.getAllTools();
  }

  addProposal() {
    var model = {
      orderId: this.order.orderId,
      workerId: this.authService.decodedToken.nameid,
      toolsInProposal: this.toolsInProposal
    }
    console.log(model);
    this.proposalService.addProposal(model).subscribe(res => {
      this.toastr.success('Proposal successfully added');
    }, error => {
      this.toastr.error('Error adding proposal');
      console.log(error);
    });
  }

  getAllTools() {
    this.toolService.getAllTools().subscribe(res => {
      this.tools = res;
    }, error => {
      this.toastr.error('Error Retrieving tools');
      console.log(error);
    });
  }

  getToolsBySearchString(searchString: any) {

  }

  freeTools() {
    return this.tools.filter(t => t.operationId === null);
  }
  removeToolFromProposal(tool: any) {
    // this.toolsForProposal.
  }

  addToolToProposal(tool: any) {
    this.toolsInProposal.push(tool);
  }
}
