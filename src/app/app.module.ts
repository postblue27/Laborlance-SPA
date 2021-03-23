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

//components
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';

//services
import { AuthService } from './_services/auth.service';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [	
      AppComponent,
      AuthComponent
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
    MatListModule,
    ReactiveFormsModule,
    NgbModule,
    MatIconModule,
    HttpClientModule,
    AdminModule,
    BrowserAnimationsModule,
    Ng2SmartTableModule,
    ToastrModule.forRoot(),
    JwtModule.forRoot({
      config : {
         tokenGetter: tokenGetter,
         allowedDomains: ['localhost:5000', 'https://hrp-api.herokuapp.com'],
         disallowedRoutes: ['localhost:5000/api/auth', 'https://hrp-api.herokuapp.com/api/auth']
      }
   }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
