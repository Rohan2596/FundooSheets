import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-veiw-sheets',
  templateUrl: './veiw-sheets.component.html',
  styleUrls: ['./veiw-sheets.component.scss']
})
export class VeiwSheetsComponent implements OnInit {
 
  headers = [5,8,9,5,8,9,5,8,9,5,8,9,5,8,9,5,8,9];
  rows = [5,8,9,5,8,9,5,8,9,5,8,9,5,8,9,5,8,9];
  constructor() { }
  arrayLength=0;
  num : any=[];
  
  ngOnInit() {
    console.log(this.headers);
    console.log(this.rows);
  for(let i =0 ;i <10;i++){
    this.num.push("");
  }
  }
addRows(num){
  for(let i =0 ;i <num;i++){
    this.num.push("");
  }
}

}
