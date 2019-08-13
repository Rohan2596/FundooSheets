import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFundoosheetComponent } from './show-fundoosheet.component';

describe('ShowFundoosheetComponent', () => {
  let component: ShowFundoosheetComponent;
  let fixture: ComponentFixture<ShowFundoosheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowFundoosheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowFundoosheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
