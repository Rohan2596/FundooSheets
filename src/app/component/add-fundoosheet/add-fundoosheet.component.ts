import { Component, OnInit } from '@angular/core';
import { AddSheetService } from '../../services/add-sheet.service';
import { MatDialog } from '@angular/material/dialog';
import { AddSheetdialogBoxComponent } from '../add-sheetdialog-box/add-sheetdialog-box.component';

@Component({
  selector: 'app-add-fundoosheet',
  templateUrl: './add-fundoosheet.component.html',
  styleUrls: ['./add-fundoosheet.component.scss']
})
export class AddFundoosheetComponent implements OnInit {
  public sheets: any;
  private popup3: boolean;
  i: any;

  private popup: boolean;
  private popup1: boolean;
  marked = false;
  theCheckbox = false;
  constructor(private addSheetService: AddSheetService,
    public matDialog: MatDialog) { }

  ngOnInit() {
    this.addSheet();
  }

  onPopup() {

    this.popup = true;
    console.log("in pop up", this.popup)
  }

  onPopup1() {

    this.popup1 = this.popup1 ? false : true;
    console.log("in pop up", this.popup1)
  }

  addSheet() {
    this.addSheetService.addSheet().subscribe(
      (response: any) => {
        this.sheets = response.fundooSheet;
        console.log("response=====>>>>>>>>>", this.sheets);
      }
    );
  }

  onPopup3() {
    this.popup3 = true;
    console.log("in pop up", this.popup3)
  }

  onIncrement() {
    this.i = this.i + 1;
  }

  openDialogue(): void {
    console.log("jsdcgakdjcgakj")
    const dialogRef = this.matDialog.open(AddSheetdialogBoxComponent, {
      width: '55%', height: '60%'

    });
    dialogRef.afterClosed().subscribe(result => {

    });

  }


}
