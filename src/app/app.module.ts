import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

//modules
import { AppRoutingModule } from './app-routing.module';
import { AdminModule } from './admin/admin.module';
import { CustomerModule } from './customer/customer.module';

//components
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';

//services
import { AuthService } from './_services/auth.service';
import { RenterModule } from './renter/renter.module';
import { WorkerModule } from './worker/worker.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OkCancelDialogComponent } from './ok-cancel-dialog/ok-cancel-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';


export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [		
      AppComponent,
      AuthComponent,
      PageNotFoundComponent,
      OkCancelDialogComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatSidenavModule,
    MatRadioModule,
    MatDialogModule,
    MatListModule,
    ReactiveFormsModule,
    NgbModule,
    MatIconModule,
    HttpClientModule,
    AdminModule,
    CustomerModule,
    RenterModule,
    WorkerModule,
    BrowserAnimationsModule,
    Ng2SmartTableModule,
    ToastrModule.forRoot(),
    JwtModule.forRoot({
      config : {
         tokenGetter: tokenGetter,
         allowedDomains: ['localhost:5000', 'https://laborlance.azurewebsites.net'],
         disallowedRoutes: ['localhost:5000/api/auth', 'https://laborlance.azurewebsites.net/api/auth']
      }
   }),
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
