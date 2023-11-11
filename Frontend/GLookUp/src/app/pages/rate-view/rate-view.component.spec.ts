import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateViewComponent } from './rate-view.component';

describe('RateViewComponent', () => {
  let component: RateViewComponent;
  let fixture: ComponentFixture<RateViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RateViewComponent]
    });
    fixture = TestBed.createComponent(RateViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
