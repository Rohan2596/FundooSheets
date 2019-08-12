import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddProjectdialogBoxComponent } from '../../component/add-projectdialog-box/add-projectdialog-box.component';
import { AddProjectService } from '../../services/add-project.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {
  public dialogRef: any;
  public projects: any;

  constructor(
    public matDialog: MatDialog,
    private addProjectService: AddProjectService,
  ) { }

  ngOnInit() {
    this.addProject();
  }

  openDialog() {
    const dialogRef = this.matDialog.open(AddProjectdialogBoxComponent, {
      width: '513px', height: '301px',
      data: {
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      // console.log(`dialog result:${result}`);
    });
  }

  addProject() {
    this.addProjectService.addProject().subscribe(
      (response: any) => {
        this.projects = response.addProject;
      }
    );
  }


}
