import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

const loginDetails = {
  emailId: '',
  password: '',
};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide: boolean = false;
  disableSubmit: boolean = false;
  loginForm: FormGroup;
  email = new FormControl(loginDetails.emailId, [Validators.required, Validators.email]);
  password = new FormControl(loginDetails.password, [Validators.required, Validators.minLength(5)]);
  constructor(private router: Router, ) { }

  ngOnInit() {
  console.log ( this.password.status)
  }
  getErrorMessageEmail() {
    return this.email.hasError('required') ? 'EmailId Is Required.' :
      this.email.hasError('email') ? 'Enter Valid EmailId.' :
        '';
  }
  getErrorMessagePassword() {
    return this.password.hasError('required') ? 'Password Feild Is Required.' :
      this.password.hasError('minLength') ? 'Min Character For Password is 5' :
        '';
        
  }
  login(){
    console.log(this.email);
    console.log(this.password);
    console.log(this.getErrorMessagePassword())
    console.log ( this.password.status)
    
  }
  register(){
    this.router.navigate(['/register'])
  }
}
