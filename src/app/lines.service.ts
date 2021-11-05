import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lines } from './models/Lines';

@Injectable({
  providedIn: 'root'
})
export class LinesService {

  url ='http://localhost:8080/UserPlanLine/v1';

  constructor(private httpClient: HttpClient) { }


  saveLines(lines:Lines[]): Observable<any> {
      console.log(JSON.stringify(lines));
		return this.httpClient.post(this.url + "/saveLines", lines);
	}
  generatePhoneNumbers(): Observable<any> {
		return this.httpClient.get(this.url + "/phoneNumbers");
	}
  getLinesByUserPlan_Id(userPlan_Id:number):Observable<any>{
    return this.httpClient.get(this.url + "/getLines/" + userPlan_Id);
  }
}
