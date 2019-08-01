import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomekurirPage } from './homekurir.page';

describe('HomekurirPage', () => {
  let component: HomekurirPage;
  let fixture: ComponentFixture<HomekurirPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomekurirPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomekurirPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
