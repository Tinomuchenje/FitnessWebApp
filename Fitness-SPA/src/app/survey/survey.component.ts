import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  model: any = {};

  constructor() { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
  }

  // tslint:disable-next-line: typedef
  calculate(){
    this.model.goal = true;
    console.log(this.model);
    const gender = this.model.gender;
    let female;
    let mantainanceDailyCalories;
    let activeDailyCalories;
    let protein;
    let carbohydrates;
    let fat;

    if (gender === 'female'){
       female = (this.model.weight * 10) + (this.model.height * 100 * 6.5) - (this.model.age * 5) - 161;
       mantainanceDailyCalories = female * this.model.activityLevel;
       activeDailyCalories = mantainanceDailyCalories * 0.75;
      }

    let male;
    if (gender === 'male'){
      male = (this.model.weight * 10) + (this.model.height * 100 * 6.5) - (this.model.age * 5) + 5;
      mantainanceDailyCalories = male * this.model.activityLevel;
      activeDailyCalories = mantainanceDailyCalories * 1.25;
    }

    protein = (activeDailyCalories * 20 / 100) / 4;
    protein = (protein / activeDailyCalories) * 100;

    carbohydrates = (activeDailyCalories * 50 / 100) / 4;
    carbohydrates = (carbohydrates / activeDailyCalories) * 100;

    fat = (activeDailyCalories * 30 / 100) / 9;
    fat = (fat / activeDailyCalories) * 100;

    this.model.protein = Math.round(protein);
    this.model.carbohydrates = Math.round(carbohydrates);
    this.model.fat = Math.round(fat);
    console.log(this.model);
  }

  // tslint:disable-next-line: typedef
  hasLanded(gender){
    console.log('has landed clicked');
    this.model.change = true;
    this.model.goal = false;
    this.model.gender = gender;
  }
}
