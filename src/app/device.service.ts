import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  url ='https://api-hrwireless.azurewebsites.net/devices/v1/';

  constructor(private httpClient: HttpClient) { }

  getAllDevices(): Observable<any> {
		return this.httpClient.get(this.url);
	}
 
}
