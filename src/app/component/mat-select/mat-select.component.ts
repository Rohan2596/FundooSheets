import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mat-select',
  templateUrl: './mat-select.component.html',
  styleUrls: ['./mat-select.component.scss']
})
export class MatSelectComponent implements OnInit {

  constructor() { }
  @Input() rows: any;
  @Input() selectedValue: any;

  ngOnInit() {
  }

}
