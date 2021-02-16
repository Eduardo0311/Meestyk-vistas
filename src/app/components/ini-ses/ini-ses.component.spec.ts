import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniSesComponent } from './ini-ses.component';

describe('IniSesComponent', () => {
  let component: IniSesComponent;
  let fixture: ComponentFixture<IniSesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IniSesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IniSesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
