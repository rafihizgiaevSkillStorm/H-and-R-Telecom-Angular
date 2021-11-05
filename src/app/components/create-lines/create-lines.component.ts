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
import { UserPlanLine } from 'src/app/models/UserPlanLine';
//import { userPlanLines } from '../user-account/user-account.component';
@Component({
  selector: 'app-create-lines',
  templateUrl: './create-lines.component.html',
  styleUrls: ['./create-lines.component.css']
})
export class CreateLinesComponent implements OnInit {
  user!: User;
  plan! : Plan;
  phoneNumbers : Number[] = [];
  devices : Device[] = [];
  lines : Lines[] = [];
  nickname : string = "Plan Doe";
  // export userPlanNoUser:UserPlan;
  numbers: number[]= [];
  //Inject our services
  constructor(private lineService:LinesService, private router:Router, private deviceService : DeviceService, private location:Location, private dataService : DataService, private userPlanService:UserPlanService ) { }



  
  //define UserPlan object to be created
  userPlan:UserPlan={
      plan : this.dataService.newSelectedPlan,
      nickname:this.nickname,
      user : this.dataService.sharedUser
  };

  ngOnInit(): void {
  
    //GET unique random phone numbers
    this.lineService.generatePhoneNumbers().subscribe(result =>{
      this.phoneNumbers = result;
    })
    //GET all devices for slides
    this.deviceService.getAllDevices().subscribe(result => {
    this.devices = result;
   })
   //get the requested plans details
    this.plan = this.dataService.newSelectedPlan;
    //create dummy array for number of lines in HTML
    this.numbers = Array(this.plan.numberOfLines).fill(3); 

   //Instanciate the line ojects for binding
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
  //minimum validation
  if(this.lines.length == this.plan.numberOfLines){
  for(let i = 0; i < this.lines.length; i++){
    for(let j  = i+1; j < this.lines.length; j++){
      if(this.lines[i].phonenumber == this.lines[j].phonenumber || (this.lines[i].phonenumber!.toString().length != 10)){
        this.show();
        return;
      }
    }
  }
  var resultConfirm = confirm( "Great! Your new Plan is now Ready!" +  "Clicking OK means that you agree to our Term and Conditions for creating a plan");
 if ( resultConfirm ) { 

  var userPlanLine:UserPlanLine={
    userPlan: {plan : this.plan},
    lines : []
  };
    //-POST-  Create UserPlan to get the userPlanId)
    this.userPlan.nickname = this.nickname;
    this.userPlanService.createUserPlan(this.userPlan).subscribe(result => {
      this.userPlan = result;
     console.log(this.userPlan);
     userPlanLine.userPlan = this.userPlan;
  // the user clicked ok so we assign the userPlanId to the lines that are being created
    for( let i = 0; i < this.plan.numberOfLines; i++){
      this.lines[i].userplan_Id = this.userPlan?.id
   }
      //-POST-Create lines - Transactional
      this.lineService.saveLines(this.lines).subscribe(result =>{
      this.lines = result;
      userPlanLine.lines = this.lines;
      console.log(this.lines);
      this.userPlanService.userPlanWOUser.id = this.userPlan!.id;
      this.userPlanService.userPlanWOUser.nickname = this.userPlan.nickname;
      this.userPlanService.userPlanWOUser.plan = this.userPlan.plan;
     this.dataService.sharedUser.userPlans?.push( this.userPlan);
     console.log(this.dataService.sharedUser.userPlans);
    });
    this.userPlanService.userPlanLines.push(userPlanLine);
    console.log()
    });
  //  this.router.navigate(['']);
    
  } else {
  // the user clicked cancel or closed the confirm dialog so we do nothing...
    }
  }

}
refreshPhoneNumbers(){
  this.lineService.generatePhoneNumbers().subscribe(result =>{
      this.phoneNumbers = result;
    });

    
}


}
