import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { LinesService } from 'src/app/lines.service';
import { Lines } from 'src/app/models/Lines';
import { User } from 'src/app/models/User';
import { UserPlan } from 'src/app/models/UserPlan';
import { UserPlanService } from 'src/app/user-plan.service';
import { UsersService } from 'src/app/users.service';
import { UserPlanLine } from 'src/app/models/UserPlanLine';
import { Plan } from 'src/app/models/Plan';
// import {ACCOUNT} from '../../models/user-table';
// import{WORKACCOUNT} from '../../models/user-table'



@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {
    plan:Plan = this.dataService.newSelectedPlan;
    userTemp:User =this.user;;
    userPlanTemp! : UserPlan;
    lines!:Lines[];
    bill?:number=0;
    isLoaded:boolean=false;
   
    userPlanLines:{userPlan:UserPlan, lines:Lines[]}[]=[];
  // accountInfo = ACCOUNT;
  // workInfo=WORKACCOUNT;
  
  // userList!:User[];

  constructor (private userService:UsersService, private dataService:DataService, private linesService:LinesService, private userPlanService:UserPlanService) { }
  //user: User = this.dataService.sharedUser;

  

  get user():User{
    return this.dataService.sharedUser
  }
   
  updateUser():void{
    var userPlanLine:UserPlanLine={
      userPlan: {plan : this.plan},
      lines : []
    };
   
    this.linesService.getLinesByUserPlan_Id( this.userPlanService.userPlanWOUser.id!).subscribe(result => {
      //  console.log(element);
      //   console.log(result);
        userPlanLine.userPlan = this.userPlanService.userPlanWOUser;
       userPlanLine.lines = result;
       this.userPlanService.userPlanLines.push(userPlanLine);
      }); 
    
  }



   uptable():void{
    this.userService.getByUserId(this.dataService.sharedUser.userId!).subscribe(result => {
      this.userTemp = result;
      //console.log(result.userPlans)
    });
     var linesTemp:Lines[];
     var userPlans:UserPlan[]=[];
     console.log(this.userTemp.userPlans);
     //  this.userService.getByUserId(this.dataService.sharedUser.userId).subscribe(result => {
     //   this.userTemp = result;
    
    //console.log( this.dataService.sharedUser.userPlans);
    this.userTemp.userPlans!.forEach( element => {
     var userPlanLine:UserPlanLine={
       userPlan: {plan : this.plan},
       lines : []
     };
     this.bill! += element.plan.numberOfLines * element.plan.pricePerLine;
       this.linesService.getLinesByUserPlan_Id(element.id!).subscribe(result => {
       //  console.log(element);
       //   console.log(result);
         userPlanLine.userPlan = element;
        userPlanLine.lines = result;
        this.userPlanLines.push(userPlanLine);
       }); 
    });
    
    
    this.isLoaded=true;
    }
  ngOnInit(): void {
    this.isLoaded=false;
   this.uptable();
    
} 


}