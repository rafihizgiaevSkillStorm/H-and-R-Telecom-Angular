import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlansService {
  url="https://api-hrwireless.azurewebsites.net/plans/v1";
  //url="http://localhost:8080/plans/v1";

  constructor(private httpClient: HttpClient) { }

    getAllPlans():Observable<any> {
      return this.httpClient.get(this.url)
    
  }
}
