import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistertokoPage } from './registertoko.page';

describe('RegistertokoPage', () => {
  let component: RegistertokoPage;
  let fixture: ComponentFixture<RegistertokoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistertokoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistertokoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
