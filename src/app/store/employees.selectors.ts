import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  State,
  employeeAdapter,
  EMPLOYEES_FEATURE_KEY
} from './employess.reducers';

export const getEmployeeState = createFeatureSelector<State>(EMPLOYEES_FEATURE_KEY);
export const { selectAll } = employeeAdapter.getSelectors(getEmployeeState); 
export const getAllCustomers = createSelector(getEmployeeState, (state: State) => selectAll(state));