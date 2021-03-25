import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/_services/auth.service';
import { OrderService } from 'src/app/_services/order.service';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss']
})
export class CreateOrderComponent implements OnInit {
  orderDescription: any;
  constructor(private orderService: OrderService, private authService: AuthService,
    public toastr: ToastrService) { }

  ngOnInit() {
  }

  createOrder() {
    console.log((document.getElementById("orderDescription") as HTMLTextAreaElement).value);
    const order = {
      description: (document.getElementById("orderDescription") as HTMLTextAreaElement).value,
      customerId: this.authService.decodedToken.nameid
    }
    this.orderService.createOrder(order).subscribe(response => {
      console.log(response);
      this.toastr.success(response.toString());
    }, error => {
      console.log(error);
      this.toastr.error(error);
    });
  }

}
