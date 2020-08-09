import { Component, OnInit, Input } from '@angular/core';
import { FormDataService } from '../data/formData.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})

export class SurveyComponent implements OnInit {
  title = 'Find out EXACTLY What Diet & Training is Best For You';
  @Input() formData;

  constructor(private formDataService: FormDataService) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.formData = this.formDataService.getFormData();
    console.log(this.title + 'loaded');
  }
 }
