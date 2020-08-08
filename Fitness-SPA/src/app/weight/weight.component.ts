import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Weight } from '../data/formData.model';
import { FormDataService } from '../data/formData.service';


@Component({
  selector: 'app-weight',
  templateUrl: './weight.component.html',
  styleUrls: ['./weight.component.css']
})

export class WeightComponent implements OnInit {
  title = 'How Much Do You Weigh?';
  weight: Weight;
  form: any;

  constructor(private router: Router, private formDataService: FormDataService) { }

  ngOnInit(): void {
    this.weight = this.formDataService.getWeight();
    console.log('Weight loaded');
  }

  displayWeight(value: any): any{
    if (!value){
    return 0;
  }
    return Math.round(value * 2.20462);
  }

  save(form: any): boolean {
    console.log(form);
    if (!form.valid) {
      return false;
    }
    this.formDataService.setWeight(this.weight);
    return true;
  }

  proceed(form: any): void {
    if (this.save(form)) {
      this.router.navigate(['/home/activity']);
    }
  }
}
