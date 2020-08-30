import { Component, OnInit } from '@angular/core';
import {ISign , USign} from '../signup/signup';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signup_data: ISign={
    name: "",
    email: "",
    password: ""
  };
  
  constructor() { }

  ngOnInit() {
  }

}
