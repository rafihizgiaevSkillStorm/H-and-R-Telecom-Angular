import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './models/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  
  url="https://api-hrwireless.azurewebsites.net/user/v1";

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
  getByUserId(user_Id?:number):Observable<any>{
    return this.httpClient.get(this.url + "/" + user_Id );
  }
}
