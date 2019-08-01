import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuahPage } from './buah.page';

describe('BuahPage', () => {
  let component: BuahPage;
  let fixture: ComponentFixture<BuahPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuahPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuahPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
