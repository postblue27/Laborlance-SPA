import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../_guards/auth.guard';
import { CustomerGuard } from '../_guards/customer.guard';
import { CreateOrderComponent } from './create-order/create-order.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';

const routes: Routes = [
  {path: 'customer', component: CustomerDashboardComponent,
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard, CustomerGuard],
    children: [
      {path: 'create-order', component: CreateOrderComponent},
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
