import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/_services/auth.service';
import { OrderService } from 'src/app/_services/order.service';

@Component({
  selector: 'app-search-for-orders',
  templateUrl: './search-for-orders.component.html',
  styleUrls: ['./search-for-orders.component.scss']
})
export class SearchForOrdersComponent implements OnInit {
  orders: any;
  searchString: any;
  constructor(private authService: AuthService, private orderService: OrderService, private toastr: ToastrService) { }

  ngOnInit() {
    this.getAllOrders();
  }

  getAllOrders() {
    this.orderService.getAllOrders().subscribe(res => {
      this.orders = res;
    }, error => {
      this.toastr.error('Error retrieving orders');
    });
  }

  getOrdersBySearchString(searchString: any) {
    if(searchString == undefined || searchString == ''){
      this.getAllOrders();
      return;
    }
    // console.log(searchString);
    this.orderService.getOrdersBySearchString(searchString).subscribe(res => {
      this.orders = res;
    }, error => {
      this.toastr.error('Error retrieving orders');
    });
  }
}
