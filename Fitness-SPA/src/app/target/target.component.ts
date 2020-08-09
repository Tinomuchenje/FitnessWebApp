import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Goal, Sex } from '../data/formData.model';
import { FormDataService } from '../data/formData.service';

@Component({
  selector: 'app-target',
  templateUrl: './target.component.html',
  styleUrls: ['./target.component.css']
})
export class TargetComponent implements OnInit {
  title = 'What best describes you';
  goal: Goal;
  gender: Sex;
  form: any;

  constructor(private router: Router, private formDataService: FormDataService) { }

  ngOnInit(): void{
    this.goal = this.formDataService.getGoal();
    this.gender = this.formDataService.getSex();
  }

  save(form: any): boolean {
    console.log(form);
    if (!form.valid) {
      return false;
    }
    this.formDataService.setGoal(this.goal);
    return true;
  }

  proceed(form: any): void {
    if (this.save(form)) {
      this.router.navigate(['/course']);
    }
  }

}
