import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitaRetiradaComponent } from './solicita-retirada.component';

describe('SolicitaRetiradaComponent', () => {
  let component: SolicitaRetiradaComponent;
  let fixture: ComponentFixture<SolicitaRetiradaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitaRetiradaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitaRetiradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
