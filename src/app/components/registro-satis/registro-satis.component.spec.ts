import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroSatisComponent } from './registro-satis.component';

describe('RegistroSatisComponent', () => {
  let component: RegistroSatisComponent;
  let fixture: ComponentFixture<RegistroSatisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroSatisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroSatisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
