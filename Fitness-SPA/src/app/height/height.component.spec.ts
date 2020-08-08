/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HeightComponent } from './height.component';

describe('HeightComponent', () => {
  let component: HeightComponent;
  let fixture: ComponentFixture<HeightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
