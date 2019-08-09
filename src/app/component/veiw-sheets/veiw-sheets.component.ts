import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-veiw-sheets',
  templateUrl: './veiw-sheets.component.html',
  styleUrls: ['./veiw-sheets.component.scss']
})
export class VeiwSheetsComponent implements OnInit {

  constructor() { }
  num : any = [0,1,2,3,4,5,6,7,8,9];
  ngOnInit() {
  }

}
