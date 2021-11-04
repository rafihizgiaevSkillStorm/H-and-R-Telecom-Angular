import { Component, OnInit, Input } from '@angular/core';
import { DeviceService } from 'src/app/device.service';
import { LinesService } from 'src/app/lines.service';
import { Device } from 'src/app/models/Device';
import { Lines } from 'src/app/models/Lines';
import { Plan } from 'src/app/models/Plan';
import { Location } from '@angular/common';
import { DataService } from 'src/app/data.service';
import { switchMapTo } from 'rxjs/operators';
import { User } from 'src/app/models/User';
import { UserPlan } from 'src/app/models/UserPlan';
import { UserPlanService } from 'src/app/user-plan.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-lines',
  templateUrl: './create-lines.component.html',
  styleUrls: ['./create-lines.component.css']
})
export class CreateLinesComponent implements OnInit {
 
  plan! : Plan;
  phoneNumbers : Number[] = [];
  devices : Device[] = [];
  lines : Lines[] = [];
  nickname : string = "";
  userPlan?:UserPlan;
  numbers: number[]= [];
  constructor(private lineService:LinesService, private route:Router, private deviceService : DeviceService, private location:Location, private dataService : DataService, private userPlanService:UserPlanService ) { }


  ngOnInit(): void {

    


    this.lineService.generatePhoneNumbers().subscribe(result =>{
      this.phoneNumbers = result;
    })
  
    this.deviceService.getAllDevices().subscribe(result => {
    this.devices = result;
   })

    this.plan = this.dataService.newSelectedPlan;
    this.numbers = Array(this.plan.numberOfLines).fill(3); 


    for( let i = 0; i < this.plan.numberOfLines; i++){
      let newLine : Lines = {
       phonenumber: i
     }
     this.lines.push(newLine);
   }


  
}

show(){
  alert("Please choose different phonenumbers");
}
saveLines():void{

  console.log(this.lines);
  if(this.lines.length == this.plan.numberOfLines){//this.plan.numberOfLines
  for(let i = 0; i < this.lines.length; i++){
    for(let j  = i+1; j < this.lines.length; j++){
      if(this.lines[i].phonenumber == this.lines[j].phonenumber || (this.lines[i].phonenumber!.toString().length != 10)){
        this.show();
        return;
      }
    }
  }
  var resultConfirm = confirm( "Great! Your new Plan is now Ready!<br>" +  "Clicking OK means that you agree to our Term and Conditions for creating a plan");
 if ( resultConfirm ) { 
   let user:User = this.dataService.sharedUser;
  this.userPlanService.userPlan.user = user;
    this.userPlanService.userPlan.nickname = this.nickname;
    this.userPlanService.createUserPlan().subscribe(result => {
      this.userPlan = result;
      console.log(result);
        
    
  // the user clicked ok
   this.route.navigate(['/', 'user-account']);
    
    
    for( let i = 0; i < this.plan.numberOfLines; i++){
      this.lines[i].userplan_Id = this.userPlan?.id
   }

    this.lineService.saveLines(this.lines).subscribe(result =>{
      this.lines = result;
     
  
     
    });
    });
  } else {
  // the user clicked cancel or closed the confirm dialog so we do nothing...

    }
  }

}
refreshPhoneNumbers(){
let user:User = this.dataService.sharedUser;
this.userPlanService.userPlan.user = user;
  this.userPlanService.userPlan.nickname = this.nickname;
  this.userPlanService.createUserPlan().subscribe(result => {
    this.userPlan = result;
  });
  for( let i = 0; i < this.plan.numberOfLines; i++){
    let newLine : Lines = {
     userplan_Id: this.userPlan?.id
   }
   this.lines.push(newLine);
 }



  this.lineService.generatePhoneNumbers().subscribe(result =>{
      this.phoneNumbers = result;
    });

    
}

// removeNumber(i : number):void{
 
//  const index = this.phoneNumbers.indexOf(i, 0);
// if (index > -1) {
//   this.phoneNumbers.splice(index, 1);
// }
//  }


}
