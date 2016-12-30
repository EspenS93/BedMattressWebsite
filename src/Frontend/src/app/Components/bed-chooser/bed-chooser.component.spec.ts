/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BedChooserComponent } from './bed-chooser.component';

describe('BedChooserComponent', () => {
  let component: BedChooserComponent;
  let fixture: ComponentFixture<BedChooserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BedChooserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BedChooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
