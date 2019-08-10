import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddProjectdialogBoxComponent } from '../../component/add-projectdialog-box/add-projectdialog-box.component';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {
  public dialogRef: any
  constructor(
    public matDialog: MatDialog
  ) { }

  ngOnInit() {
  }

  openDialog() {
    const dialogRef = this.matDialog.open(AddProjectdialogBoxComponent, {
      width: '513px', height: '301px',
      data: {
        // name: items.name,
        // description: items.description,
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      // console.log(`dialog result:${result}`);
    });
  }

}
