import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveViewComponent } from './approve-view.component';

describe('ApproveViewComponent', () => {
  let component: ApproveViewComponent;
  let fixture: ComponentFixture<ApproveViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApproveViewComponent]
    });
    fixture = TestBed.createComponent(ApproveViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
