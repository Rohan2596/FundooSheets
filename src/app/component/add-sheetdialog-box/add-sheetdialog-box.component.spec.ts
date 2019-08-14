import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSheetdialogBoxComponent } from './add-sheetdialog-box.component';

describe('AddSheetdialogBoxComponent', () => {
  let component: AddSheetdialogBoxComponent;
  let fixture: ComponentFixture<AddSheetdialogBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSheetdialogBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSheetdialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
