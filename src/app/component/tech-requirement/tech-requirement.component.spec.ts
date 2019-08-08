import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechRequirementComponent } from './tech-requirement.component';

describe('TechRequirementComponent', () => {
  let component: TechRequirementComponent;
  let fixture: ComponentFixture<TechRequirementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechRequirementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechRequirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
