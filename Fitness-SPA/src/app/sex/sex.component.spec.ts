/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SexComponent } from './sex.component';

describe('SexComponent', () => {
  let component: SexComponent;
  let fixture: ComponentFixture<SexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
