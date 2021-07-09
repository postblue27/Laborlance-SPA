import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/_services/auth.service';
import { OperationService } from 'src/app/_services/operation.service';
import { OrderService } from 'src/app/_services/order.service';
import { ProposalService } from 'src/app/_services/proposal.service';
import { ToolService } from 'src/app/_services/tool.service';

@Component({
  selector: 'app-your-proposals',
  templateUrl: './your-proposals.component.html',
  styleUrls: ['./your-proposals.component.scss']
})
export class YourProposalsComponent implements OnInit {

  proposals: any;
  constructor(private orderSerice: OrderService, private route: ActivatedRoute, private operationService: OperationService,
    public toolService: ToolService, public toastr: ToastrService, public authService: AuthService, 
      public proposalService: ProposalService) { }

  ngOnInit() {
    this.getWorkerProposals();
  }

  getWorkerProposals() {
    this.proposalService.getWorkerProposals(this.authService.decodedToken.nameid).subscribe(res => {
      this.proposals = res;
      console.log(res);
    }, error => {
      this.toastr.error('error retreiving proposals');
      console.log(error);
    });
  }

  countPricePerHour(proposal: any) {
    let totalPrice: any = 0;
    for(var toolInProposal of proposal.proposedTools){
      totalPrice += toolInProposal.tool.rentalPrice;
    }
    totalPrice += proposal.worker.hourlyWage;
    return totalPrice;
  }
}
