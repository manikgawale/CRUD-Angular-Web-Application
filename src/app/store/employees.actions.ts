import {createAction, props} from '@ngrx/store'
import { Employee } from '../models/employee.component';
import {Update} from '@ngrx/entity'

export const loadEmployees = createAction("[Employees] Load Employees");

export const loadEmployeeSuccess = createAction("[Employees] Load Employess Success", props<{ employees : Employee[]}>())

export const loadEmployeeError = createAction("[Employees] Load Employess Error", props<{ error : any}>())


export const addEmployee = createAction("[Employees] Add Employee", props<{employee : Employee}>());

export const updateEmployee = createAction("[Employees] Update Employee", props<{employee : Update<Employee>}>());

export const deleteEmployee = createAction("[Employees] Remove Employee", props<{employeeId : string}>());