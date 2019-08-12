import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardBoxService {

  constructor(private http:HttpClient) {}
    getdashboard(){
        return this.http.get('../../assets/data/dashboard.json');
    
  console.log();
   }
}
