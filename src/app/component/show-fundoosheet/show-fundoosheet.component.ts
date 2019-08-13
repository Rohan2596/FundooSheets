import { Component, OnInit } from '@angular/core';
import { AddSheetService } from '../../services/add-sheet.service';

@Component({
  selector: 'app-show-fundoosheet',
  templateUrl: './show-fundoosheet.component.html',
  styleUrls: ['./show-fundoosheet.component.scss']
})
export class ShowFundoosheetComponent implements OnInit {
  public sheets: any;
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


}
