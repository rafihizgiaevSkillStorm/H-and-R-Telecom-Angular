import { Injectable } from '@angular/core';
import { Plan } from './models/Plan';
import { User } from './models/User';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  sharedUser!:User;
  newSelectedPlan!:Plan;

  constructor() { }
}
