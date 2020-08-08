import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Height } from '../data/formData.model';
import { FormDataService } from '../data/formData.service';

@Component({
  selector: 'app-height',
  templateUrl: './height.component.html',
  styleUrls: ['./height.component.css']
})
export class HeightComponent implements OnInit {
  title = 'What is your Height';
  height: Height;
  form: any;

  constructor(private router: Router, private formDataService: FormDataService) { }

  ngOnInit(): void {
    this.height = this.formDataService.getHeight();
    console.log('Height loaded');
  }

  displayHeight(value: any): string {
    if (!value){
      return ' ';
    }
    const realFeet = ((value * 0.393700) / 12);
    const feet = Math.floor(realFeet);
    const inches = Math.round((realFeet - feet) * 12);

    return feet  + "'" + inches ;
  }

  save(form: any): boolean {
    console.log(form);
    if (!form.valid) {
      return false;
    }
    this.formDataService.setHeight(this.height);
    return true;
  }

  proceed(form: any): void {
    if (this.save(form)) {
      this.router.navigate(['/home/weight']);
    }
  }

}
