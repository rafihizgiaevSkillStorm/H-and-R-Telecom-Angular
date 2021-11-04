import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './models/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  
  url="http://localhost:8080/user/v1";

  constructor(private httpClient: HttpClient) { }

  getAllUsers():Observable<any> {
      return this.httpClient.get(this.url)
    
  }

  saveUser(user: User): Observable<any> {
		return this.httpClient.post(this.url+"/user", user)
	}

  getByUserNameAndPassword(username:String, password:String):Observable<any>{
    return this.httpClient.get(this.url+"/"+username+"/"+password);
  }
}
