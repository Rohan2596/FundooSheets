import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-add-sheetdialog-box',
  templateUrl: './add-sheetdialog-box.component.html',
  styleUrls: ['./add-sheetdialog-box.component.scss']
})
export class AddSheetdialogBoxComponent implements OnInit {
  marked = false;
  constructor(  public dialogRef: MatDialogRef<AddSheetdialogBoxComponent>) { }

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  toggleVisibility(e){
    this.marked= e.target.checked;
  }
}
