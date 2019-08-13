import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFundoosheetComponent } from './add-fundoosheet.component';

describe('AddFundoosheetComponent', () => {
  let component: AddFundoosheetComponent;
  let fixture: ComponentFixture<AddFundoosheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFundoosheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFundoosheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
