import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CrudUsersComponent } from './crud-users/crud-users.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

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

@NgModule({
  declarations: [
    CrudUsersComponent,
    AdminDashboardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,

    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    LayoutModule,
    MatSidenavModule,
    MatExpansionModule,
    Ng2SmartTableModule,
  ]
})
export class AdminModule { }
