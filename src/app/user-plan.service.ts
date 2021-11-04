import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './data.service';
import { User } from './models/User';
import { UserPlan } from './models/UserPlan';



@Injectable({
  providedIn: 'root'
})
export class UserPlanService {
   
  url="http://localhost:8080/userplan/v1";

  constructor(private httpClient: HttpClient, private dataService:DataService) { }
    userPlan:UserPlan = {
    plan:this.dataService.newSelectedPlan,
    nickname: "",
    user:this.dataService.sharedUser,
    }

  getUserPlansByUser_Id():Observable<any> {
    return this.httpClient.get(this.url + "/" + this.dataService.sharedUser.userId );
}

createUserPlan():Observable<any> {
  console.log(this.userPlan);
  return this.httpClient.post(this.url + "/saveUserPlan", this.userPlan);

}
getUserPlanByUserPlanId(userPlan_Id:number):Observable<any>{
  return this.httpClient.get(this.url + "/getUserPlanByUserPlanId/" +  userPlan_Id);
}
deletePlan(userPlan:UserPlan):Observable<any>{
  console.log(userPlan);

  return this.httpClient.post(this.url +"/deleteUserPlan", userPlan);
}


}
