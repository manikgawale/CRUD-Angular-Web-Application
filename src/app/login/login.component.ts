import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {Router, NavigationExtras, ActivatedRoute} from "@angular/router";
import { Route } from '@angular/compiler/src/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username : string;
  password : string;
  loginForm :FormGroup;
  
  constructor(private http : HttpClient, private router : Router, private route : ActivatedRoute) { 
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
   });
  }

  
  ngOnInit(): void {
    this.username = 'Manik';
    this.password = 'Manik';
    
  }
   
  loginUser() : void{
    //,{username : this.username, password : this.password}
    this.http.post('/api/login', {username : this.username, password : this.password}).subscribe(res => {
      console.log(res); 
      this.router.navigate(['dashboard']);
    });
  }

  resetForm() : void{
    this.username = "";
    this.password = "";
  }
}
