import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SheetServiceService {
  //baseurl = environment.userApi;
  baseurl2 = environment.sheetsApi;
  constructor(private http: HttpClient) { }
  // public postRequest(url: any, data: any): any {
  //   return this.http.post(this.baseurl2 + url, data);
  // }
  // public putRequest(url: any, data: any): any {
  //   return this.http.put(this.baseurl2 + url, data);
  // }

  // public deleteRequest(url: any): any {
  //   return this.http.delete(this.baseurl2 + url);
  // }

  public getRequest(url: any): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token-N')
      })
    };
    console.log("Url",this.baseurl2+url);
    
    return this.http.get(this.baseurl2 + url, httpOptions);
  }
}
