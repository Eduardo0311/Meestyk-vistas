import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilSuscribeteComponent } from './perfil-suscribete.component';

describe('PerfilSuscribeteComponent', () => {
  let component: PerfilSuscribeteComponent;
  let fixture: ComponentFixture<PerfilSuscribeteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilSuscribeteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilSuscribeteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
