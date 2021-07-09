import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProposalResolver, WorkerRoutingModule } from './worker-routing.module';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ToastrModule } from 'ngx-toastr';
import { AdminModule } from '../admin/admin.module';
import { AppRoutingModule } from '../app-routing.module';
import { CustomerModule } from '../customer/customer.module';
import { WorkerDashboardComponent } from './worker-dashboard/worker-dashboard.component';
import { AddProposalComponent } from './add-proposal/add-proposal.component';
import { YourProposalsComponent } from './your-proposals/your-proposals.component';
import { YourOperationsComponent } from './your-operations/your-operations.component';
import { SearchForOrdersComponent } from './search-for-orders/search-for-orders.component';


@NgModule({
  declarations: [
    WorkerDashboardComponent,
    AddProposalComponent,
    YourProposalsComponent,
    YourOperationsComponent,
    SearchForOrdersComponent,
  ],
  imports: [
    CommonModule,
    WorkerRoutingModule,

    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    LayoutModule,
    MatSidenavModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    Ng2SmartTableModule,
    
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    AdminModule,
    CustomerModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    ProposalResolver
  ]
})
export class WorkerModule { }
