import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NumScaleQuestionAdditionalInfoComponent } from './num-scale-question-additional-info.component';

describe('NumScaleQuestionAdditionalInfoComponent', () => {
  let component: NumScaleQuestionAdditionalInfoComponent;
  let fixture: ComponentFixture<NumScaleQuestionAdditionalInfoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [NumScaleQuestionAdditionalInfoComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumScaleQuestionAdditionalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
