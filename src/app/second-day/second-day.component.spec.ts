import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondDayComponent } from './second-day.component';

describe('SecondDayComponent', () => {
  let component: SecondDayComponent;
  let fixture: ComponentFixture<SecondDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondDayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
