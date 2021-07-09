import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule, OrderResolver } from './customer-routing.module';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { LayoutModule } from '@angular/cdk/layout';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CreateOrderComponent } from './create-order/create-order.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatBadgeModule} from '@angular/material/badge';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { MatOptionModule } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteOrderDialog, YourOrdersComponent } from './your-orders/your-orders.component';
import { OrderProposalsComponent } from './order-proposals/order-proposals.component';
import { YourOperationsComponent } from './your-operations/your-operations.component';


@NgModule({
  declarations: [
    CustomerDashboardComponent,
    CreateOrderComponent,
    CustomerProfileComponent,
    YourOrdersComponent,
    DeleteOrderDialog,
    OrderProposalsComponent,
    YourOperationsComponent,
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,

    MatGridListModule,
    MatOptionModule,
    MatTabsModule,
    MatSelectModule,
    MatCardModule,
    MatMenuModule,
    MatDialogModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatBadgeModule,
    LayoutModule,
    MatSidenavModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    Ng2SmartTableModule,
    ReactiveFormsModule,
  ],
  providers: [
    OrderResolver
  ]
})
export class CustomerModule { }
