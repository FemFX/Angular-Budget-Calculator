bimport { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {

  constructor() { } 
  total  : number;
  total1 : number;
  total2 : number;
  ngOnInit() {
    this.total  = 0;
    this.total1 = 0;
    this.total2 = 0;
  }

}
