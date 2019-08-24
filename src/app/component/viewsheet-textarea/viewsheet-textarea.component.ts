import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-viewsheet-textarea',
  templateUrl: './viewsheet-textarea.component.html',
  styleUrls: ['./viewsheet-textarea.component.scss']
})
export class ViewsheetTextareaComponent implements OnInit {
  @Input() textMessage=[];

  constructor() { }

  ngOnInit() {
    console.log("parent data=====>",this.textMessage);
    
  }

}
