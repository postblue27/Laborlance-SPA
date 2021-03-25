import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from '../_guards/admin.guard';
import { AuthGuard } from '../_guards/auth.guard';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CrudUsersComponent } from './crud-users/crud-users.component';

const routes: Routes = [
  {path: 'admin', component: AdminDashboardComponent,
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard, AdminGuard],
    children: [
      {path: 'crud-users/:roleName', component: CrudUsersComponent},
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
