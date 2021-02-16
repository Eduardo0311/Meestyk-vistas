import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilImgAndNameComponent } from './perfil-img-and-name.component';

describe('PerfilImgAndNameComponent', () => {
  let component: PerfilImgAndNameComponent;
  let fixture: ComponentFixture<PerfilImgAndNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilImgAndNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilImgAndNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
