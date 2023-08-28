import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwipeProfileComponent } from './swipe-profile.component';

describe('SwipeProfileComponent', () => {
  let component: SwipeProfileComponent;
  let fixture: ComponentFixture<SwipeProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwipeProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwipeProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
