import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {startWith, map} from 'rxjs/operators';
import { SheetServiceService } from 'src/app/services/sheet-service/sheet-service.service';
import { MatSnackBar } from '@angular/material';
export interface Food {
  value: string;
  viewValue: string;
}
export interface StateGroup {
  letter: string;
  names: string[];
}

export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};


@Component({
  selector: 'app-veiw-sheets',
  templateUrl: './veiw-sheets.component.html',
  styleUrls: ['./veiw-sheets.component.scss']
})
export class VeiwSheetsComponent implements OnInit {
 // headers = [5,6,7,8,9,6,7,8,6,6,7,8,9,7,8,6,8,7,8,5,6,7,8,9,6,7,8,6,6,7,8,9,7,8,6,8,7,8];
  rows = [5,6,7,8];
  projectId='5d5ce2996287ad00182dddf4';
  sheetId='5d60cce05460b5001847494e';
  headersData=[];
  objectKey=Object.keys;
  rowsData=[];
  constructor(private _formBuilder: FormBuilder,private _snackBar: MatSnackBar,private httpservice: SheetServiceService) { }
  arrayLength=0;
  num : any=[];
  


  stateForm: FormGroup = this._formBuilder.group({
    stateGroup: '',
  });

  stateGroups: StateGroup[] = [{
    letter: 'A',
    names: ['Alabama', 'Alaska', 'Arizona', 'Arkansas']
  }, {
    letter: 'C',
    names: ['California', 'Colorado', 'Connecticut']
  }, {
    letter: 'D',
    names: ['Delaware']
  }, {
    letter: 'F',
    names: ['Florida']
  }, {
    letter: 'G',
    names: ['Georgia']
  }, {
    letter: 'H',
    names: ['Hawaii']
  }, {
    letter: 'I',
    names: ['Idaho', 'Illinois', 'Indiana', 'Iowa']
  }, {
    letter: 'K',
    names: ['Kansas', 'Kentucky']
  }, {
    letter: 'L',
    names: ['Louisiana']
  }, {
    letter: 'M',
    names: ['Maine', 'Maryland', 'Massachusetts', 'Michigan',
      'Minnesota', 'Mississippi', 'Missouri', 'Montana']
  }, {
    letter: 'N',
    names: ['Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
      'New Mexico', 'New York', 'North Carolina', 'North Dakota']
  }, {
    letter: 'O',
    names: ['Ohio', 'Oklahoma', 'Oregon']
  }, {
    letter: 'P',
    names: ['Pennsylvania']
  }, {
    letter: 'R',
    names: ['Rhode Island']
  }, {
    letter: 'S',
    names: ['South Carolina', 'South Dakota']
  }, {
    letter: 'T',
    names: ['Tennessee', 'Texas']
  }, {
    letter: 'U',
    names: ['Utah']
  }, {
    letter: 'V',
    names: ['Vermont', 'Virginia']
  }, {
    letter: 'W',
    names: ['Washington', 'West Virginia', 'Wisconsin', 'Wyoming']
  }];

  stateGroupOptions: Observable<StateGroup[]>; 

  ngOnInit() {
    //console.log(this.headers);
    //console.log(this.rows);
    this.getHeaders();
  
  localStorage.setItem('token-N', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNWNlMTY1ZDE4NjcwMDAxOWRmNjAyYSIsImVtYWlsIjoibmlzaGFyYXV0ODRAZ21haWwuY29tIiwiZXhwIjoxNTcxNjYwNzkzLCJpYXQiOjE1NjY0NzY3OTN9.LhtcA_Khsqt104UtAgnUfH62OYb9ArLcZLSk4ZyyRyg');
  console.log('token-N',localStorage.getItem('token-N'));
  
  this.stateGroupOptions = this.stateForm.get('stateGroup')!.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterGroup(value))
      );
  }
addRows(num){
  for(let i =0 ;i <num;i++){
    this.num.push("");
  }
}
private _filterGroup(value: string): StateGroup[] {
  if (value) {
    return this.stateGroups
      .map(group => ({letter: group.letter, names: _filter(group.names, value)}))
      .filter(group => group.names.length > 0);
  }

  return this.stateGroups;
}

getHeaders()
{
// var option = {..
//   url = '/projects/projectId/sheets/sheetId';
// }
this.httpservice.getRequest('/projects/'+this.projectId+'/sheets/'+this.sheetId).subscribe(
  (response: any) => {
    console.log(response);
    this.rowsData = response.fields;
    console.log("rows===>",this.rowsData);
    
    this.headersData = (response as any).fields;
    console.log("Data",this.headersData);
    this.num=response.records;
    for(let i =response.records.length ;i <10;i++){
      this.num.push("");
     
    }
    
    console.log('response:',response);
  },
  error => {
    console.log("error",error);
    
  }
);
}




}
