import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SayurPage } from './sayur.page';

describe('SayurPage', () => {
  let component: SayurPage;
  let fixture: ComponentFixture<SayurPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SayurPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SayurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
