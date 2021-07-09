import { Injectable, NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AddToolComponent } from '../renter/add-tool/add-tool.component';
import { YourToolsComponent } from '../renter/your-tools/your-tools.component';
import { AuthGuard } from '../_guards/auth.guard';
import { RenterGuard } from '../_guards/renter.guard';
import { WorkerGuard } from '../_guards/worker.guard';
import { OrderService } from '../_services/order.service';
import { AddProposalComponent } from './add-proposal/add-proposal.component';
import { SearchForOrdersComponent } from './search-for-orders/search-for-orders.component';
import { WorkerDashboardComponent } from './worker-dashboard/worker-dashboard.component';
import { YourOperationsComponent } from './your-operations/your-operations.component';
import { YourProposalsComponent } from './your-proposals/your-proposals.component';


@Injectable()
export class ProposalResolver implements Resolve<any> {
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
  {path: 'worker', component: WorkerDashboardComponent,
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard, WorkerGuard],
    children: [
      {path: 'search-for-orders', component: SearchForOrdersComponent},
      {path: 'add-proposal/:orderId', component: AddProposalComponent,
      resolve: {data: ProposalResolver}},
      {path: 'your-operations', component: YourOperationsComponent},
      {path: 'your-proposals', component: YourProposalsComponent},
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkerRoutingModule { }
