import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-veiw-sheets',
  templateUrl: './veiw-sheets.component.html',
  styleUrls: ['./veiw-sheets.component.scss']
})
export class VeiwSheetsComponent implements OnInit {
 
  headers = [0,1,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
  rows = [0,1,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
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
