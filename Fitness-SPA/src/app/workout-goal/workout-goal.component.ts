import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-workout-goal',
  templateUrl: './workout-goal.component.html',
  styleUrls: ['./workout-goal.component.css']
})
export class WorkoutGoalComponent implements OnInit {
  @Input() values: any;
  model: any = {};

  constructor() { }

  ngOnInit() {
    console.log(this.values);
  }

}
