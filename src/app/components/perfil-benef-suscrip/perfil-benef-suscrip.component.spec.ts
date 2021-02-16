import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilBenefSuscripComponent } from './perfil-benef-suscrip.component';

describe('PerfilBenefSuscripComponent', () => {
  let component: PerfilBenefSuscripComponent;
  let fixture: ComponentFixture<PerfilBenefSuscripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilBenefSuscripComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilBenefSuscripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
