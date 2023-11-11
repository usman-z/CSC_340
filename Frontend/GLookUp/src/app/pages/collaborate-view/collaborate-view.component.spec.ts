import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaborateViewComponent } from './collaborate-view.component';

describe('CollaborateViewComponent', () => {
  let component: CollaborateViewComponent;
  let fixture: ComponentFixture<CollaborateViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollaborateViewComponent]
    });
    fixture = TestBed.createComponent(CollaborateViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
