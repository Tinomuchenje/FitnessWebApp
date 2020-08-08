import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Age } from '../data/formData.model';
import { FormDataService } from '../data/formData.service';

@Component({
  selector: 'app-age',
  templateUrl: './age.component.html',
  styleUrls: ['./age.component.css']
})
export class AgeComponent implements OnInit {
  title = 'What is your age';
  age: Age;
  form: any;

  constructor(private router: Router, private formDataService: FormDataService) { }

  ngOnInit(): void {
    this.age = this.formDataService.getAge();
    console.log('Age loaded');
  }

  save(form: any): boolean {
    console.log(form);
    if (!form.valid) {
      return false;
    }
    this.formDataService.setAge(this.age);
    return true;
  }

  proceed(form: any): void {
    if (this.save(form)) {
      this.router.navigate(['/home/height']);
    }
  }

}
