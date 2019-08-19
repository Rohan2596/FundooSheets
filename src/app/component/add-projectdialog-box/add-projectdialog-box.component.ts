import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';

const projectDetails = {
  projectName: '',
  description: ''
};

@Component({
  selector: 'app-add-projectdialog-box',
  templateUrl: './add-projectdialog-box.component.html',
  styleUrls: ['./add-projectdialog-box.component.scss']
})
export class AddProjectdialogBoxComponent implements OnInit {

  projectName = new FormControl(projectDetails.projectName, [Validators.required, Validators.minLength(3)]);
  description = new FormControl(projectDetails.description, [Validators.required, Validators.minLength(3)]);

  constructor(
    public dialogBox: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit() {
  }

  projectNameError() {
    return this.projectName.hasError('required') ? 'Project Name is required' :
      this.projectName.hasError('minlength') ? 'Minimum length must be 3' :
        '';
  }

  descriptionError() {
    return this.description.hasError('required') ? 'Description is required' :
      this.description.hasError('minlength') ? 'Minimum length must be 3' : '';
  }

}
