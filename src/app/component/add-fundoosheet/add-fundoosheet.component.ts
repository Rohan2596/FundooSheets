import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-fundoosheet',
  templateUrl: './add-fundoosheet.component.html',
  styleUrls: ['./add-fundoosheet.component.scss']
})
export class AddFundoosheetComponent implements OnInit {
 

  private popup: boolean;
  constructor() { }

  ngOnInit() {
  }

  onPopup() {

    this.popup = true;
    console.log("in pop up",this.popup)
  }


}
