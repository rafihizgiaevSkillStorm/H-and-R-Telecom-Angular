import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PhoneNumberService {

  url ='http://localhost:8080/UserPlanLine/v1/phoneNumbers';

  constructor(private httpClient: HttpClient) { }
//sends post request to check if a number exists, I just need to generate random number function to create phonenumbers to offer the client;
  checkNumber(): Observable<any> {
		return this.httpClient.get(this.url);
	}


}
