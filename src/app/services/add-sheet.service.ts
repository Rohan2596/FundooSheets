import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddSheetService {

  constructor(private http: HttpClient) { }

  addSheet() {
    console.log("add project services")
    // return this.http.get('../../assets/data/fundooSheet.json');
    return this.http.get('../assets/data/fundooSheet.json');
  }
}
