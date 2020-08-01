import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Employee } from '../models/employee.component';
import * as employeeActions from './employees.actions' 

export const EMPLOYEES_FEATURE_KEY = 'employees';
export interface State extends EntityState<Employee> {
    loaded: boolean,
    error? : string
}

export const employeeAdapter : EntityAdapter<Employee> = createEntityAdapter<Employee>({
    selectId: (employee : Employee) => employee.employeeId
});

export const initialState : State = employeeAdapter.getInitialState({
    loaded : false
});

const employeeReducer = createReducer(
    initialState , 
    on(employeeActions.loadEmployees, (state) => ({
    ...state,
    loaded:false,
    error: null
})), on(employeeActions.loadEmployeeSuccess, (state, {employees}) => (
    employeeAdapter.addAll(employees, { ...state, loaded:true})
)), on(employeeActions.addEmployee, (state, {employee}) => (
    employeeAdapter.addOne(employee, { ...state, loaded:true})
)), on(employeeActions.updateEmployee, (state, {employee}) => (
    employeeAdapter.updateOne(employee, {...state, loaded:true})
)), on(employeeActions.deleteEmployee, (state, {employeeId}) => (
    employeeAdapter.removeOne(employeeId, { ...state, loaded:true})
))
)

export function reducer(state: State | undefined, action: Action) {
    return employeeReducer(state, action);
  }