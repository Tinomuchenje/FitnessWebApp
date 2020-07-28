import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  model: any = {};

  constructor() { }

  ngOnInit() {
  }

  calculate(){

    console.log(this.model);
  }

  hasLanded(){
    this.model.change = true;
  }
}
