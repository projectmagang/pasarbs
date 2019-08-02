import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesPage } from './tes.page';

describe('TesPage', () => {
  let component: TesPage;
  let fixture: ComponentFixture<TesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
