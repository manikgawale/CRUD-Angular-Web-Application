import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class EmployeeService {
    constructor(private http : HttpClient){

    }

    getEmployees (){
        console.log("in service");
        return this.http.get('/api/employees');
    }
}