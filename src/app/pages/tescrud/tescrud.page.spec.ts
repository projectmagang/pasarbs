import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TescrudPage } from './tescrud.page';

describe('TescrudPage', () => {
  let component: TescrudPage;
  let fixture: ComponentFixture<TescrudPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TescrudPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TescrudPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
