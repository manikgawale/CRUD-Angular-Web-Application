import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router"
import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeRouteAuthGuard implements CanActivate {

    constructor(private router : Router){
        
    }

    canActivate(): boolean {
        return true;
    }
}