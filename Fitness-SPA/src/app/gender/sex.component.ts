import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Sex } from '../data/formData.model';
import { FormDataService } from '../data/formData.service';

@Component({
  selector: 'app-sex',
  templateUrl: './sex.component.html',
  styleUrls: ['./sex.component.css']
})

export class SexComponent implements OnInit {
  title = 'Are you a Woman or a Man?';
  sex: Sex;
  form: any;

  constructor(private router: Router, private formDataService: FormDataService) { }

  ngOnInit(): void {
    this.sex = this.formDataService.getSex();
    console.log('Gender feature loaded!');
  }

  setgender(gender: string, form: any): void {
    if (gender === 'female')
    {
      this.sex.isFemale = true;
      this.sex.isMale = false;
      this.proceed(form);
    }
    if (gender === 'male')
    {
      this.sex.isMale = true;
      this.sex.isFemale = false;
      this.proceed(form);
    }
  }

  save(form: any): boolean {
    console.log(form);
    if (!form.valid){
      return false;
    }
    this.formDataService.setSex(this.sex);
    return true;
  }

  proceed(form: any): void {
    if (this.save(form)){
      this.router.navigate(['/home/age']);
    }
  }
}
