/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewBedComponent } from './new-bed.component';

describe('NewBedComponent', () => {
  let component: NewBedComponent;
  let fixture: ComponentFixture<NewBedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
