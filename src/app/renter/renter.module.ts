import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RenterRoutingModule } from './renter-routing.module';
import { RenterDashboardComponent } from './renter-dashboard/renter-dashboard.component';
import { LayoutModule } from '@angular/cdk/layout';
import { AddToolComponent } from './add-tool/add-tool.component';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { AdminModule } from '../admin/admin.module';
import { AppRoutingModule } from '../app-routing.module';
import { CustomerModule } from '../customer/customer.module';
import { YourToolsComponent } from './your-tools/your-tools.component';

import { FileUploadModule } from 'ng2-file-upload';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { EditToolDialogComponent } from './your-tools/edit-tool-dialog/edit-tool-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatBadgeModule } from '@angular/material/badge';


@NgModule({
  declarations: [
    RenterDashboardComponent,
    AddToolComponent,
    YourToolsComponent,
    EditToolDialogComponent,
  ],
  imports: [
    CommonModule,
    RenterRoutingModule,

    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatDialogModule,
    LayoutModule,
    MatBadgeModule,
    MatSidenavModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatChipsModule,
    MatInputModule,
    Ng2SmartTableModule,
    FileUploadModule,
    
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatSelectModule,
    MatIconModule,
    MatRadioModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    AdminModule,
    CustomerModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ]
})
export class RenterModule { }
