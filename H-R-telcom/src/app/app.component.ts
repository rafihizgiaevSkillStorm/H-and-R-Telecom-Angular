import { Component } from '@angular/core';
import { DataService } from './data.service';
import { User } from './models/User';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'H&R Wirless';

  constructor (private dataService:DataService) {

  }
 
get user():User {
  return this.dataService.sharedUser;
}


}
