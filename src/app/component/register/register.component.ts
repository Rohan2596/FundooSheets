import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
const registerDetails = {
  emailId: '',
  password: '',
  confirmpassword:''
};
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  hide: boolean = false;
  hide1:boolean=false;
  disableSubmit: boolean = false;

  email = new FormControl(registerDetails.emailId, [Validators.required, Validators.email]);
  password = new FormControl(registerDetails.password, [Validators.required, Validators.minLength(5)]);
  confirmpassword = new FormControl(registerDetails.confirmpassword, [Validators.required, Validators.minLength(5)]);
 constructor(private router: Router) { }

  ngOnInit() {
  }
  getErrorMessageEmail() {
    return this.email.hasError('required') ? 'EmailId Is Required.' :
      this.email.hasError('email') ? 'Enter Valid EmailId.' :
        '';
  }
  getErrorMessagePassword() {
    return this.email.hasError('required') ? 'Password Feild Is Required.' :
      this.email.hasError('minLength') ? 'Min Character For Password is 5' :
        '';
  }
  register(){
    console.log("successfull");
  }
  login(){
this.router.navigate(['/login'])
  }
}
