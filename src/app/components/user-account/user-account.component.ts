import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { LinesService } from 'src/app/lines.service';
import { Lines } from 'src/app/models/Lines';
import { User } from 'src/app/models/User';
import { UserPlan } from 'src/app/models/UserPlan';
import { UserPlanService } from 'src/app/user-plan.service';
import { UsersService } from 'src/app/users.service';
// import {ACCOUNT} from '../../models/user-table';
// import{WORKACCOUNT} from '../../models/user-table'



@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {

    userPlanTemp! : UserPlan;
    lines!:Lines[];
    bill?:number=0;
    isLoaded=false;
  // accountInfo = ACCOUNT;
  // workInfo=WORKACCOUNT;
  
  // userList!:User[];

  constructor(private userService:UsersService, private dataService:DataService, private linesService:LinesService, private userPlanService:UserPlanService) { }
  //user: User = this.dataService.sharedUser;
  get user():User{
    return this.dataService.sharedUser
  }

  ngOnInit(): void {
    console.log(this.dataService.sharedUser);
     this.userService.getByUserId(this.dataService.sharedUser.userId).subscribe(result => {
      this.dataService.sharedUser = result;

  this.user.userPlans?.forEach( element => {
    this.linesService.getLinesByUserPlan_Id(element.id!).subscribe(result => {
      element.lines = result;
    });
  });
  this.isLoaded=true;
 });
 this.user.userPlans?.forEach( element => {
   this.bill = +element.plan.pricePerLine * +element.plan.numberOfLines + +this.bill!;
   console.log(this.bill);
    });
    
} 

}