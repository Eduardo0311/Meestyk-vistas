import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveCamsComponent } from './live-cams.component';

describe('LiveCamsComponent', () => {
  let component: LiveCamsComponent;
  let fixture: ComponentFixture<LiveCamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveCamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveCamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
