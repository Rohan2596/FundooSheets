import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-projectdialog-box',
  templateUrl: './add-projectdialog-box.component.html',
  styleUrls: ['./add-projectdialog-box.component.scss']
})
export class AddProjectdialogBoxComponent implements OnInit {

  constructor(
    public dialogBox: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

}
