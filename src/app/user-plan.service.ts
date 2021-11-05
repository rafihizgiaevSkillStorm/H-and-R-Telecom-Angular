import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './data.service';
import { Lines } from './models/Lines';
import { User } from './models/User';
import { UserPlan } from './models/UserPlan';



@Injectable({
  providedIn: 'root'
})
export class UserPlanService {

   userPlanLines:{userPlan:UserPlan, lines:Lines[]}[]=[];


   
  url="https://api-hrwireless.azurewebsites.net/userplan/v1";


  constructor(private httpClient: HttpClient, private dataService:DataService) { }
    userPlan:UserPlan = {
    plan:this.dataService.newSelectedPlan,
    nickname: "",
    user:this.dataService.sharedUser,
    }
    userPlanWOUser:UserPlan = {
      plan:this.dataService.newSelectedPlan,
      nickname: ""
      }

  getUserPlansByUser_Id():Observable<any> {
    return this.httpClient.get(this.url + "/" + this.dataService.sharedUser.userId );
}

createUserPlan(userPlan:UserPlan):Observable<any> {
  console.log(userPlan);
  return this.httpClient.post(this.url + "/saveUserPlan", userPlan);

}
getUserPlanByUserPlanId(userPlan_Id:number):Observable<any>{
  return this.httpClient.get(this.url + "/getUserPlanByUserPlanId/" +  userPlan_Id);
}
deletePlan(userPlan:UserPlan):Observable<any>{
  console.log(userPlan);

  return this.httpClient.post(this.url +"/deleteUserPlan", userPlan);
}


}
