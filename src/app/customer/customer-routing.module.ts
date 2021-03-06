import { Injectable, NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthGuard } from '../_guards/auth.guard';
import { CustomerGuard } from '../_guards/customer.guard';
import { OrderService } from '../_services/order.service';
import { CreateOrderComponent } from './create-order/create-order.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { OrderProposalsComponent } from './order-proposals/order-proposals.component';
import { YourOperationsComponent } from './your-operations/your-operations.component';
import { YourOrdersComponent } from './your-orders/your-orders.component';


@Injectable()
export class OrderResolver implements Resolve<any> {
    constructor(private orderService: OrderService, private toastr: ToastrService,
        private router: Router) {}
    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        return this.orderService.getOrderById(route.paramMap.get('orderId')).pipe(
            catchError(error => {
                this.toastr.error('Proplem retrieveing Order by orderId ' + route.paramMap.get('orderId'));
                this.router.navigate(['']);
                console.log(error);
                return of(null);
            })
        );
    }
}

const routes: Routes = [
  {path: 'customer', component: CustomerDashboardComponent,
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard, CustomerGuard],
    children: [
      {path: 'create-order', component: CreateOrderComponent},
      {path: 'profile', component: CustomerProfileComponent},
      {path: 'your-orders', component: YourOrdersComponent},
      {path: 'order-proposals/:orderId', component: OrderProposalsComponent,
        resolve: {data: OrderResolver}
      },
      {path: 'your-operations', component: YourOperationsComponent},
      
    ]
}
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
