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

  constructor(private formDataService: FormDataService) { }

  ngOnInit(): void {
    this.formData = this.formDataService.getFormData();
    if (this.formData){
      this.category = this.getCategory(this.formData);
      console.log(this.category);
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
}
