import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

const resetDetails={
  password:'',
  confirmpassword:''
}

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  hide: boolean = false;
  hide1: boolean = false;
  disableSubmit: boolean = false;
  resetForm: FormGroup;
  password = new FormControl(resetDetails.password, [Validators.required, Validators.minLength(5), Validators.maxLength(8)]);
  confirmpassword=new FormControl(resetDetails.confirmpassword,[Validators.required, Validators.minLength(5), Validators.maxLength(8)]);
  constructor(private router: Router, ) { }

  ngOnInit() {
  }

  getErrorMessageConfrimPassword() {
    return this.confirmpassword.hasError('required') ? 'Password Feild Is Required.' :
      this.confirmpassword.hasError('minLength') ? 'Min Character For Password is 5' :
      this.confirmpassword.hasError('maxLength') ? 'Max Character For Password is 8' :
        '';
  }
  getErrorMessagePassword() {
    return this.password.hasError('required') ? 'Password Feild Is Required.' :
      this.password.hasError('minLength') ? 'Min Character For Password is 5' :
      this.password.hasError('maxLength') ? 'Max Character For PassWord is 8' : '';
  }
  login(){
    this.router.navigate(['/login'])

  }
}
