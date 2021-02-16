import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilPaquetesSuscripComponent } from './perfil-paquetes-suscrip.component';

describe('PerfilPaquetesSuscripComponent', () => {
  let component: PerfilPaquetesSuscripComponent;
  let fixture: ComponentFixture<PerfilPaquetesSuscripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilPaquetesSuscripComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilPaquetesSuscripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
