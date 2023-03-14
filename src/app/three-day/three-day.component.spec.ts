import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeDayComponent } from './three-day.component';

describe('ThreeDayComponent', () => {
  let component: ThreeDayComponent;
  let fixture: ComponentFixture<ThreeDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeDayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreeDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
