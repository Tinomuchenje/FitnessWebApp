import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Activity } from '../data/formData.model';
import { FormDataService } from '../data/formData.service';

@Component({
  selector: 'app-activity-level',
  templateUrl: './activity-level.component.html',
  styleUrls: ['./activity-level.component.css']
})
export class ActivityLevelComponent implements OnInit {
  title = 'Select level of activity';
  activity: Activity;
  form: any;

  constructor(private router: Router, private formDataService: FormDataService) { }

  ngOnInit(): void {
    this.activity = this.formDataService.getActivity();
    console.log('Weight loaded');
  }

  save(form: any): boolean {
    console.log(form);
    if (!form.valid) {
      return false;
    }
    this.formDataService.setActivity(this.activity);
    return true;
  }

  proceed(form: any): void {
    if (this.save(form)) {
      this.router.navigate(['/goal']);
    }
  }
}
