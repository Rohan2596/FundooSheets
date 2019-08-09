import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProjectdialogBoxComponent } from './add-projectdialog-box.component';

describe('AddProjectdialogBoxComponent', () => {
  let component: AddProjectdialogBoxComponent;
  let fixture: ComponentFixture<AddProjectdialogBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProjectdialogBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProjectdialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
