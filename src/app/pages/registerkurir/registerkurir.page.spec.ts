import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterkurirPage } from './registerkurir.page';

describe('RegisterkurirPage', () => {
  let component: RegisterkurirPage;
  let fixture: ComponentFixture<RegisterkurirPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterkurirPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterkurirPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
