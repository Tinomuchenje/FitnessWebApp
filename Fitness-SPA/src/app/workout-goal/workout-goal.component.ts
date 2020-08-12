import { Component, OnInit, Input } from '@angular/core';
import { FormDataService } from '../data/formData.service';

import { FormData } from '../data/formData.model';

@Component({
  selector: 'app-workout-goal',
  templateUrl: './workout-goal.component.html',
  styleUrls: ['./workout-goal.component.css']
})
export class WorkoutGoalComponent implements OnInit {
  title = 'This Diet & Training is Best For You';
  model: any = {};
  @Input() formData;
  category: any;
  videoUrl: string;
  activityLevel: string;

  constructor(private formDataService: FormDataService) { }

  ngOnInit(): void {
    this.formData = this.formDataService.getFormData();
    if (this.formData){
      this.category = this.getCategory(this.formData);
      this.calculate(this.formData);
      this.activityLeve(this.formData);
    }
  }

  calculate(form: FormData): void {
    console.log(form);
    let female: number;
    let mantainanceDailyCalories: number;
    let actualDailyCalories: number;
    let protein: number;
    let carbohydrates: number;
    let fat: number;

    if (form.isFemale) {
      female = (form.weight * 10) + (form.height * 100 * 6.5) - (form.age * 5) - 161;
      mantainanceDailyCalories = female * form.activity;
      actualDailyCalories = mantainanceDailyCalories * form.goal;
    }

    let male: number;
    if (form.isMale) {
      male = (form.weight * 10) + (form.height * 100 * 6.5) - (form.age * 5) + 5;
      mantainanceDailyCalories = male * form.activity;
      actualDailyCalories = mantainanceDailyCalories * form.goal;
    }

    protein = ((actualDailyCalories * 20 ) / 100) / 4;
    this.model.p = Math.round(protein) || 0;
    protein = (protein / actualDailyCalories) * 100;

    carbohydrates = ((actualDailyCalories * 50) / 100) / 4;
    this.model.c = Math.round(carbohydrates) || 0;
    carbohydrates = (carbohydrates / actualDailyCalories) * 100;

    fat = ((actualDailyCalories * 30) / 100) / 9;
    this.model.f = Math.round(fat) || 0;
    fat = (fat / actualDailyCalories) * 100;

    this.model.protein = Math.round(protein) || 0;
    this.model.carbohydrates = Math.round(carbohydrates) || 0;
    this.model.fat = Math.round(fat) || 0;
    this.model.dailyCalories = Math.round(actualDailyCalories) || 0;
    console.log(form);
  }

  getCategory(form: FormData): any {
    if (form.isMale){
      switch (form.goal.toString()){
        case '1.25': {
          this.setCourseTitle('90 Day Huge Bulk Program');
          this.videoUrl = 'https://www.youtube.com/embed/3p8EBPVZ2Iw';
          break;
        }
        case '1.15': {
          this.setCourseTitle('90 Day Lean Program');
          this.videoUrl = 'https://www.youtube.com/embed/JTjhmQadzJ8';
          break;
        }
        case '0.85': {
          this.setCourseTitle('90 Day Lean Program');
          this.videoUrl = 'https://www.youtube.com/embed/Mg6_6E_kxDI';
          break;
        }
        case '0.65': {
          this.setCourseTitle('90 Day Maximum Fat Loss Program');
          this.videoUrl = 'https://www.youtube.com/embed/3sEeVJEXTfY';
          break;
        }
      }
    }

    if (form.isFemale){
      switch (form.goal.toString()) {
        case '0.75': {
          this.setCourseTitle('90 Day Maximum Fat Loss Program');
          this.videoUrl = 'https://www.youtube.com/embed/2MoGxae-zyo';
          break;
        }
        case '1.15': {
          this.setCourseTitle('90 Day Lean Build Program');
          this.videoUrl = 'https://www.youtube.com/embed/UBMk30rjy0o';
          break;
        }
        case '0.65': {
          this.setCourseTitle('90 Day Maximum Fat Loss Program');
          this.videoUrl = 'https://www.youtube.com/embed/7KgiB_TDMMk';
          break;
        }
      }
    }
  }

  setCourseTitle(title: string): void {
    this.title = title;
  }

  activityLeve(form: FormData): any {
    switch (form.activity.toString()) {
      case '1.2': {
        this.activityLevel = 'Sedentary';
        break;
    }
      case '1.325': {
        this.activityLevel = 'Light Activity';
        break;
      }
      case '1.55': {
        this.activityLevel = 'Moderate Activity';
        break;
      }
      case '1.725': {
        this.activityLevel = 'Very Active';
        break;
      }
      case '1.9': {
        this.activityLevel = 'Extreme Activity';
        break;
      }
    }

  }
}
