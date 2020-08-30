import { Component, OnInit } from '@angular/core';
import {Ilogin} from '../login/login'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //login_data is variable and Ilogin is interface
  //Ilogin is declare in the login.ts file in login component
  login_data: Ilogin={
    email: "",
    password: ""
  };
  constructor() { }

  ngOnInit(): void {
  }

}
