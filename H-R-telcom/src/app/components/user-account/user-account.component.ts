import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { User } from 'src/app/models/User';
import { UsersService } from 'src/app/users.service';
import {ACCOUNT} from '../../models/user-table';
import{WORKACCOUNT} from '../../models/user-table'



@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {


  accountInfo = ACCOUNT;
  workInfo=WORKACCOUNT;
  
  userList!:User[];

  constructor(private userService:UsersService, private dataService:DataService) { }

  get user():User{
    return this.dataService.sharedUser
    console.log(this.user)
  }
  
  

  ngOnInit(): void {
  }
  

}
