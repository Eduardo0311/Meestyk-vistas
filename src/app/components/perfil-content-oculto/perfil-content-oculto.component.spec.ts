import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilContentOcultoComponent } from './perfil-content-oculto.component';

describe('PerfilContentOcultoComponent', () => {
  let component: PerfilContentOcultoComponent;
  let fixture: ComponentFixture<PerfilContentOcultoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilContentOcultoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilContentOcultoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
