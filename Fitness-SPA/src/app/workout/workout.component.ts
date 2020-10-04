import { Component, OnInit } from '@angular/core';
import { analytics } from 'firebase';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss']
})
export class WorkoutComponent implements OnInit {


  constructor() { }

  ngOnInit(): void{
  }

  getWorkouts(): any{
    const workout1 = { Id: 1, IsComplete: true };
    const workout2 = { Id: 2, IsComplete: true };
    const workout3 = { Id: 3, IsComplete: true };
    const workout4 = { Id: 4, IsComplete: false };
    const array = [workout1, workout2, workout3, workout4];
    const array2 = [workout1, workout2, workout3, workout4];
    let date = 0;

    for (date = 4; date <= 90; date ++){
      array.push({ Id: date, IsComplete: false});
    }

    for (date = 4; date <= 30; date++) {
      array2.push({ Id: date, IsComplete: true });
    }

    return array;
  }
}
