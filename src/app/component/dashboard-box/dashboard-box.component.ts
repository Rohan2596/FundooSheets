import { Component, OnInit } from '@angular/core';
import { DashboardBoxService } from '../../services/dashboard-box.service';
@Component({
  selector: 'app-dashboard-box',
  templateUrl: './dashboard-box.component.html',
  styleUrls: ['./dashboard-box.component.scss']
})
export class DashboardBoxComponent implements OnInit {
lab: any[];
techtypeData:any[];
  constructor( private dashboardServices: DashboardBoxService) { }

  ngOnInit() {
    // this.getAllTechType();
    this.techstack();
  }


  techstack() {
    this.dashboardServices.getdashboard().subscribe(
      response => {
        this.techtypeData = response['Tech Type'];
        this.lab=response['Lab'];

        console.log('Tech Type===>', this.techtypeData);
        console.log('lab=>>>',this.lab);
      }
    );
  }


}
