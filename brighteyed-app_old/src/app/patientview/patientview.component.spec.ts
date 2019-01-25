import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientviewComponent } from './patientview.component';

describe('PatientviewComponent', () => {
  let component: PatientviewComponent;
  let fixture: ComponentFixture<PatientviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
