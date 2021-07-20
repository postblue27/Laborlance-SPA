import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { AuthGuard } from '../_guards/auth.guard';
import { RenterGuard } from '../_guards/renter.guard';
import { AddToolComponent } from './add-tool/add-tool.component';
import { RenterDashboardComponent } from './renter-dashboard/renter-dashboard.component';
import { YourToolsComponent } from './your-tools/your-tools.component';

const routes: Routes = [
  {path: 'renter', component: RenterDashboardComponent,
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard, RenterGuard],
    children: [
      {path: 'add-tool', component: AddToolComponent},
      {path: 'your-tools', component: YourToolsComponent},
    ]
  },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RenterRoutingModule { }
