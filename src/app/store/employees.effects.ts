import { HttpClient } from '@angular/common/http';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { pipe, of } from 'rxjs';
import * as employeeActions from "../store/employees.actions";
import { EmployeeService } from './employee.services';
import { Employee } from '../models/employee.component';
import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeEffects {

    constructor(private actions$ : Actions, private empService : EmployeeService){}

    loadEmployees$ = createEffect(() =>
    this.actions$.pipe(
      ofType(employeeActions.loadEmployees),
      mergeMap(() => this.empService.getEmployees()
        .pipe(
          tap(res => console.log(res)),
          map((data: Employee[]) => employeeActions.loadEmployeeSuccess( { employees: data })),
          catchError(() => of({ type: '[Employees] Load Employess Error' }))
        )
      )
    )
  );               
}