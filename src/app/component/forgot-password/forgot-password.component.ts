import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
const forgotDetails = {
  emailId: '',
  };
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  hide: boolean = false;
  disableSubmit: boolean = false;
  forgotForm: FormGroup;
  email = new FormControl(forgotDetails.emailId, [Validators.required, Validators.email]);
  
  constructor(private router: Router, ) { }

  ngOnInit() {
  }
  getErrorMessageEmail() {
    return this.email.hasError('required') ? 'EmailId Is Required.' :
      this.email.hasError('email') ? 'Enter Valid EmailId.' :
        '';
  }
  forgot(){
    console.log("forgot");
    console.log(this.email);
    
  }
  login(){
    this.router.navigate(['/login']);
  }
}
