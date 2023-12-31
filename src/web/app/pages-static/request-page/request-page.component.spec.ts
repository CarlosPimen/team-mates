import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RequestPageComponent } from './request-page.component';

describe('RequestPageComponent', () => {
  let component: RequestPageComponent;
  let fixture: ComponentFixture<RequestPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RequestPageComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
