import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import {MatTabsModule} from '@angular/material/tabs';
import { EmployeeComponent } from './employee/employee.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatTableModule } from '@angular/material/table';
import { StoreModule } from '@ngrx/store';
import * as empReducer  from './store/employess.reducers';
import { EmployeeEffects } from './store/employees.effects';
import { EffectsModule } from '@ngrx/effects';
import { EmployeeService } from './store/employee.services';
import { EmployeeRouteAuthGuard } from './AuthGuards/employeeRoute.components';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    EmployeeComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    MatTabsModule,
    MatTableModule,
    StoreModule.forRoot( {employees: empReducer.reducer}),
    EffectsModule.forRoot([EmployeeEffects])
    // StoreModule.forFeature(
    //   empReducer.EMPLOYEES_FEATURE_KEY,

    //   empReducer.reducer
    // ),
    // EffectsModule.forFeature([EmployeeEffects])
  ],
  providers: [EmployeeService, EmployeeRouteAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
