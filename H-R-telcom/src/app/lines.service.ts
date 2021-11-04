import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lines } from './models/Lines';

@Injectable({
  providedIn: 'root'
})
export class LinesService {

  url ='http://localhost:8080/UserPlanLine/v1/';

  constructor(private httpClient: HttpClient) { }


  createLine(line:Lines): Observable<any> {
		return this.httpClient.post(this.url, line);
	}
}
