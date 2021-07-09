import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { count } from 'rxjs/operators';
import { AuthService } from 'src/app/_services/auth.service';
import { OperationService } from 'src/app/_services/operation.service';

@Component({
  selector: 'app-your-operations',
  templateUrl: './your-operations.component.html',
  styleUrls: ['./your-operations.component.scss']
})
export class YourOperationsComponent implements OnInit {
  operations: any;
  constructor(private operationService: OperationService, private authService: AuthService, public toastr: ToastrService) { }

  ngOnInit() {
    this.getWorkerOperations();
  }

  getWorkerOperations() {
    this.operationService.getWorkerOperations(this.authService.decodedToken.nameid).subscribe(res => {
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

  countClosedOperationTime(operation: any): number {
    var time = new Date(operation.endDate).getTime() - new Date(operation.startDate).getTime();
    time = time/3600000;
    // console.log(time.toFixed(2));
    return time;
  }

  countCurrentPrice(operation: any) {
    var time = this.countOperationTime(operation);
    var pricePerHour = this.countPricePerHour(operation);
    return (time * pricePerHour);
  }

  closeOperation(operation) {
    this.operationService.closeOperation(operation.operationId, this.countCurrentPrice(operation)).subscribe(res => {
      this.toastr.success('Operation successfully closed');
    }, error => {
      this.toastr.error('Error closing operation');
      console.log(error);
    });
  }
}
