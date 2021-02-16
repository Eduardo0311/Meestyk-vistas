import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggMetodoPagoComponent } from './agg-metodo-pago.component';

describe('AggMetodoPagoComponent', () => {
  let component: AggMetodoPagoComponent;
  let fixture: ComponentFixture<AggMetodoPagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AggMetodoPagoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AggMetodoPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
