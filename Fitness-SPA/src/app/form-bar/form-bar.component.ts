import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-bar',
  templateUrl: './form-bar.component.html',
  styleUrls: ['./form-bar.component.css']
})
export class FormBarComponent implements OnInit {
  route: string;

  constructor(location: Location, router: Router) {
    router.events.subscribe(val => {
      if (location.path() !== '') {
        this.route = location.path();
        console.log(this.route);
      }
    });
   }
  ngOnInit(): void {
  }
}
