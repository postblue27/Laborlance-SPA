import { NodeWithI18n } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { OperationService } from 'src/app/_services/operation.service';

@Component({
  selector: 'app-your-operations',
  templateUrl: './your-operations.component.html',
  styleUrls: ['./your-operations.component.scss']
})
export class YourOperationsComponent implements OnInit {
  operations: any;
  constructor(private operationService: OperationService, private authService: AuthService) { }

  ngOnInit() {
    this.getCustomerOperations();
  }

  getCustomerOperations() {
    this.operationService.getCustomerOperations(this.authService.decodedToken.nameid).subscribe(res => {
      console.log(res);
      this.operations = res;
    }, error => {
      console.log(error);
    });
  }

  countPricePerHour(operation: any) {
    var totalPrice: any = 0;
    for(var tool of operation.toolsInRent){
      totalPrice += tool.rentalPrice;
    }
    totalPrice += operation.worker.hourlyWage;
    return totalPrice;
  }

  countOperationTime(operation: any): number {
    var time = new Date().getTime() - new Date(operation.startDate).getTime();
    time = time/3600000;
    // console.log(time.toFixed(2));
    return time;
  }

  countCurrentPrice(operation: any) {
    var time = this.countOperationTime(operation);
    var pricePerHour = this.countPricePerHour(operation);
    return (time * pricePerHour);
  }

  countClosedOperationTime(operation: any): number {
    var time = new Date(operation.endDate).getTime() - new Date(operation.startDate).getTime();
    time = time/3600000;
    // console.log(time.toFixed(2));
    return time;
  }
}
