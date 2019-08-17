import { Component, OnInit } from '@angular/core';
import { AddSheetService } from '../../services/add-sheet.service';

@Component({
  selector: 'app-show-fundoosheet',
  templateUrl: './show-fundoosheet.component.html',
  styleUrls: ['./show-fundoosheet.component.scss']
})
export class ShowFundoosheetComponent implements OnInit {
  public sheets: any;
  private popup3: boolean;
  i:any;
  constructor(private addSheetService:AddSheetService) { }

  ngOnInit() {
    this.addSheet();
  }

  addSheet() {
    this.addSheetService.addSheet().subscribe(
      (response: any) => {
        this.sheets = response.fundooSheet;
        console.log("response=====>>>>>>>>>",this.sheets);
      }
    );
  }

  onPopup3() {
    this.popup3 = true;
    console.log("in pop up",this.popup3)
  }

  onIncrement(){
    this.i = this.i+1;
  }

}
