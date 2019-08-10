import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddProjectService {

  constructor(private http: HttpClient) { }

  addProject() {
    console.log("add project services")
    return this.http.get('../../assets/data/addProject.json');
  }
}
