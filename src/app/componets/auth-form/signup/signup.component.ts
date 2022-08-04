import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm = new FormGroup({
    fName: new FormControl(null,[Validators.required, Validators.minLength(3),Validators.maxLength(45)]),
    lName: new FormControl(null,[Validators.required, Validators.minLength(3),Validators.maxLength(45)]),
    userName: new FormControl(null,[Validators.required, Validators.maxLength(10)]),
    password: new FormControl(null,[Validators.required, Validators.minLength(6),Validators.maxLength(16)]),
  });
  constructor() { }

  ngOnInit(): void {
  }

  onSignup() {

  }
}
