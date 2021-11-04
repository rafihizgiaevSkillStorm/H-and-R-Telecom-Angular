import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { User } from 'src/app/models/User';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
})
export class NewUserComponent implements OnInit {
  formData: User;
  showAlert: boolean = false;

  constructor(private usersService: UsersService, private router: Router, private dataService:DataService) {
    this.formData = new User();
  }

  ngOnInit(): void {}
  handleSubmit(): void {
    this.usersService.saveUser(this.formData).subscribe(result=> this.handleResponse(result), error=> this.handleError(error));
  }
  handleError(error: any): void {
    console.log(error)
    this.showAlert=true;
  }

  handleResponse(result: any) {
    console.log("saved user")
    if(result) {
      this.user=result;
      this.router.navigate(['/plans']);
    }
    console.log(result)
  }

  set user(user:User) {
    this.dataService.sharedUser=user;
  }
}

