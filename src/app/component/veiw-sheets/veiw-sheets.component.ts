import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { SheetServiceService } from 'src/app/services/sheet-service/sheet-service.service';
import { MatSnackBar } from '@angular/material';
export interface Food {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-veiw-sheets',
  templateUrl: './veiw-sheets.component.html',
  styleUrls: ['./veiw-sheets.component.scss']
})
export class VeiwSheetsComponent implements OnInit {
  // headers = [5,6,7,8,9,6,7,8,6,6,7,8,9,7,8,6,8,7,8,5,6,7,8,9,6,7,8,6,6,7,8,9,7,8,6,8,7,8];
  rows = [5, 6, 7, 8];
  projectId = '5d5ce2996287ad00182dddf4';
  sheetId = '5d60cce05460b5001847494e';
  headersData = [];
  objectKey = Object.keys;
  rowsData = [];
  constructor(private _snackBar: MatSnackBar, private httpservice: SheetServiceService) { }
  arrayLength = 0;
  num: any = [];




  ngOnInit() {
    //console.log(this.headers);
    //console.log(this.rows);
    this.getHeaders();

    localStorage.setItem('token-N', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNWJkNDZjZDE4NjcwMDAxOWRmNjAyNSIsImVtYWlsIjoibmFnZW5kcmEuc2luZ2hAYnJpZGdlbGFiei5jb20iLCJleHAiOjE1NzE4MzM1NzUsImlhdCI6MTU2NjY0OTU3NX0.YxV6j2LxPhneG1tBmMShfuhiHn98iQ4Mp7qmAzYcRtc');
    console.log('token-N', localStorage.getItem('token-N'));

  }
  addRows(num) {
    for (let i = 0; i < num; i++) {
      this.num.push("");
    }
  }


  getHeaders() {
    // var option = {..
    //   url = '/projects/projectId/sheets/sheetId';
    // }
    this.httpservice.getRequest('/projects/' + this.projectId + '/sheets/' + this.sheetId).subscribe(
      (response: any) => {
        console.log(response);
        this.rowsData = response.fields;
        console.log("rows===>", this.rowsData);

        this.headersData = (response as any).fields;
        console.log("Data", this.headersData);
        this.num = response.records;
        for (let i = response.records.length; i < 10; i++) {
          this.num.push("");

        }

        console.log('response:', this.num);
      },
      error => {
        console.log("error", error);

      }
    );
  }




}
