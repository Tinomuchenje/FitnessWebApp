import { Component, OnInit, Input } from '@angular/core';
import { FormDataService } from '../data/formData.service';

import { FormData, Sex, Age, Height, Weight, Activity } from '../data/formData.model';

@Component({
  selector: 'app-workout-goal',
  templateUrl: './workout-goal.component.html',
  styleUrls: ['./workout-goal.component.css']
})
export class WorkoutGoalComponent implements OnInit {
  title = 'This Diet & Training is Best For You';
  model: any = {};
  @Input() formData;

  constructor(private formDataService: FormDataService) { }

  ngOnInit(): void {
    this.formData = this.formDataService.getFormData();
    if (this.formData){
      this.calculate(this.formData);

    }
  }

  calculate(form: FormData): void {
    console.log(form);
    let female: number;
    let mantainanceDailyCalories: number;
    let activeDailyCalories: number;
    let protein: number;
    let carbohydrates: number;
    let fat: number;

    if (form.isFemale) {
      female = (form.weight * 10) + (form.height * 100 * 6.5) - (form.age * 5) - 161;
      mantainanceDailyCalories = female * form.activity;
      activeDailyCalories = mantainanceDailyCalories * form.goal;
    }

    let male: number;
    if (form.isMale) {
      male = (form.weight * 10) + (form.height * 100 * 6.5) - (form.age * 5) + 5;
      mantainanceDailyCalories = male * form.activity;
      activeDailyCalories = mantainanceDailyCalories * form.goal;
    }

    protein = (activeDailyCalories * 20 / 100) / 4;
    protein = (protein / activeDailyCalories) * 100;

    carbohydrates = (activeDailyCalories * 50 / 100) / 4;
    carbohydrates = (carbohydrates / activeDailyCalories) * 100;

    fat = (activeDailyCalories * 30 / 100) / 9;
    fat = (fat / activeDailyCalories) * 100;

    this.model.protein = Math.round(protein) || 0;
    this.model.carbohydrates = Math.round(carbohydrates) || 0;
    this.model.fat = Math.round(fat) || 0;
    console.log(form);
  }

}
