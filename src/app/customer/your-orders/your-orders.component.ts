import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/_services/auth.service';
import { OrderService } from 'src/app/_services/order.service';

@Component({
  selector: 'app-your-orders',
  templateUrl: './your-orders.component.html',
  styleUrls: ['./your-orders.component.scss']
})

export class YourOrdersComponent implements OnInit {

  orders: any;
  constructor(private authService: AuthService, private orderService: OrderService, private toastr: ToastrService,
    public dialog: MatDialog) { }

  ngOnInit() {
    // console.log(this.authService.decodedToken);
    this.getCustomerOrders();
  }

  getCustomerOrders() {
    this.orderService.getCustomerOrders(this.authService.decodedToken.nameid).subscribe(res => {
      console.log(res);
      this.orders = res;
    }, error => {
      console.log('Error: ' + error);
      this.toastr.error('Error getting customer orders');
    });
  }

  proposalCount(order: any) {
    console.log(order.proposals.length);
  }

  openDialog(order: any): void {
    const dialogRef = this.dialog.open(DeleteOrderDialog, {
      width: '250px'
    });
    
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.orderService.deleteOrder(order.orderId).subscribe(res => {
          this.getCustomerOrders();
          this.toastr.success('Order deleted');
        }, error => {
          this.toastr.error('Problem deleting order');
          console.log(error);
        })
        console.log('confirmed');
      } else {
        console.log('declined');
      }
    });
  }
}

@Component({
  selector: 'delete-order-dialog',
  templateUrl: 'delete-order-dialog.html',
})
export class DeleteOrderDialog {

  constructor(public dialogRef: MatDialogRef<DeleteOrderDialog>) {}

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onOkClick(): void {
    this.dialogRef.close(true);
  }

}

