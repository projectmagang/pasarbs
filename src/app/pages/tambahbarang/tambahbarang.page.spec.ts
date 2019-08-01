import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahbarangPage } from './tambahbarang.page';

describe('TambahbarangPage', () => {
  let component: TambahbarangPage;
  let fixture: ComponentFixture<TambahbarangPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TambahbarangPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TambahbarangPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
