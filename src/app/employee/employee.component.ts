import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee.component';
import { Store, select } from '@ngrx/store';
import { loadEmployees, deleteEmployee, addEmployee, updateEmployee} from '../store/employees.actions'
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { selectAll } from '../store/employees.selectors';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees : Observable<Employee[]>;
  openForm : boolean = false;
  isEdit : boolean = false;
  showRowBackground : boolean = false;
  employeeId : string;
  firstName : string;
  lastName : string;
  jobTitleName : string;
  emailAddress : string;
  empForm :FormGroup;
  
  public displayedColumns = ['employeeId', 'firstName', 'lastName', 'jobTitleName', 'emailAddress', 'actions'];
  
  constructor(private http: HttpClient, private store : Store< { employees : Employee[]}>) {
    this.empForm = new FormGroup({
      employeeId: new FormControl(),
      firstName: new FormControl(),
      lastName: new FormControl(),
      jobTitleName: new FormControl(),
      emailAddress: new FormControl()
   });
  
   this.store.dispatch(loadEmployees());
    store.pipe(select('employees'));
    this.employees = store.select(selectAll);
    
   }

  ngOnInit(): void {
  }

  openEmpForm() : void {
      this.resetFormField();
      this.empForm.markAsUntouched();
      this.openForm = true;
      this.isEdit = false;
  }

  rowClicked() : void {
    this.showRowBackground = true;
  }
  editClicked(emp : Employee) : void {
    this.isEdit = true;
    this.employeeId = emp.employeeId;
    this.firstName = emp.firstName;
    this.lastName = emp.lastName;
    this.jobTitleName = emp.jobTitleName;
    this.emailAddress = emp.emailAddress;
    
    this.openForm = true;
  }

  addOrUpdateEmployee() : void {
    if(this.employeeId == undefined || this.jobTitleName == undefined || this.firstName == undefined ||  this.lastName == undefined || this.emailAddress == undefined){
      return;
    }

    let emp = new Employee(this.employeeId, this.jobTitleName, this.firstName, this.lastName,  this.emailAddress);

    if(this.isEdit == true ){
      this.editEmployee(emp);
      this.openForm = false;
    } else {
      this.addEmployee(emp);
    }
    this.isEdit = false;
    this.resetFormField();
  }

  addEmployee(emp : Employee) : void {    
    this.store.dispatch(addEmployee({employee : emp }));

    this.resetFormField();
  }

  cancel() : void {
    this.resetFormField();
    this.openForm = false;
    this.isEdit = false;
  }
  
  resetFormField() {
    this.employeeId = undefined;
    this.firstName = undefined;
    this.lastName = undefined;
    this.jobTitleName = undefined;
    this.emailAddress = undefined;
  }

  deleteEmployee(employee : Employee) : void{
    console.log('user Deleted :' + employee.employeeId);
    this.store.dispatch(deleteEmployee( {employeeId : employee.employeeId}));
  }

  editEmployee(employee : Employee) : void{
    console.log('user Edited :' + employee.employeeId)
    this.store.dispatch(updateEmployee({ employee: { id: employee.employeeId, changes: employee } }));
  } 
}