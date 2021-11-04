import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { Plan } from 'src/app/models/Plan';
import { PlansService } from 'src/app/plans.service';

@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.css']
})
export class PlanesComponent implements OnInit {
  planList!:Plan[];

  constructor(private planService:PlansService, private dataService: DataService, private router:Router) { }

  ngOnInit(): void {

    this.planService.getAllPlans().subscribe(result =>{
      this.planList = result;
    })
  }

  handleClick(selectedPlan:Plan): void {
    console.log(selectedPlan);
    this.plan=selectedPlan;
    this.router.navigate(['/????']);
    
  }

  set plan(plan:Plan) {
    this.dataService.newSelectedPlan=plan;
  }

  get plan():Plan {
    return this.dataService.newSelectedPlan;
  }
  
  

}
