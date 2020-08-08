/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormBarComponent } from './form-bar.component';

describe('FormBarComponent', () => {
  let component: FormBarComponent;
  let fixture: ComponentFixture<FormBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
