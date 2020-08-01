import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate  } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeRouteAuthGuard } from './AuthGuards/employeeRoute.components';

const routes: Routes = [{
  path: '',
  redirectTo: 'employeeManagement',
  pathMatch: 'full'
},
{
  path: 'employeeManagement',
  component: LoginComponent
},
{
  path: 'dashboard',
  component: DashboardComponent,
  children : [{
    path: 'home',
    component: HomeComponent
},{
    path : 'employeeList',
    component: EmployeeComponent,
    canActivate  : [EmployeeRouteAuthGuard]
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
