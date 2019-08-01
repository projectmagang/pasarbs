import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HometokoPage } from './hometoko.page';

describe('HometokoPage', () => {
  let component: HometokoPage;
  let fixture: ComponentFixture<HometokoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HometokoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HometokoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
