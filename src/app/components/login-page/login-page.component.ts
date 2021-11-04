import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { UsersService } from 'src/app/users.service';
import { User } from '../../models/User';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css', './../../main-style.css']
})
export class LoginPageComponent implements OnInit {

username!:String;
password!:String;
showAlert:Boolean= false;

  constructor(private userService:UsersService, private router:Router,private dataService:DataService) { 
  }
  
  ngOnInit(): void {
  }

  handleSubmit(): void {
    this.userService.getByUserNameAndPassword(this.username, this.password).subscribe(result=> this.handleResponse(result), error=> this.handleError(error));
  }

  handleError(error: any): void {
    console.log(error)
    this.showAlert=true;
  }

  handleResponse(result: any) {
    // console.log("user login")
    if(result) {
      this.user=result;
      this.router.navigate(['/user-account']);
    }
    else {
      this.showAlert=true;
    }
    
    // console.log(result)
    // console.log(typeof(result));
  }
  get user():User{
    return this.dataService.sharedUser;
  }
  set user(user:User){
     this.dataService.sharedUser = user;
  }
    
  
}
