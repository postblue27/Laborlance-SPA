import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OperationService } from 'src/app/_services/operation.service';
import { OrderService } from 'src/app/_services/order.service';

@Component({
  selector: 'app-order-proposals',
  templateUrl: './order-proposals.component.html',
  styleUrls: ['./order-proposals.component.css']
})
export class OrderProposalsComponent implements OnInit {
  order: any;
  proposals: any;
  constructor(private orderSerice: OrderService, private route: ActivatedRoute, private operationService: OperationService) { }

  ngOnInit() {
    this.route.data.subscribe(response => {
      this.order = response.data;
      this.proposals = this.orderSerice.getOrderProposalsWithTools(this.order.orderId).subscribe(res => {
        this.proposals = res;
        console.log(res);
      }, error => {
        console.log(error);
      });
      console.log(this.order);
    }, error => {
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

  createOperation(proposalId: any) {
    this.operationService.createOperation(proposalId).subscribe(res => {
      console.log(res);
      
    }, error => {
      console.log(error);
    });
  }
}
