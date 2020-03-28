import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcessoRemotoComponent } from './acesso-remoto.component';

describe('AcessoRemotoComponent', () => {
  let component: AcessoRemotoComponent;
  let fixture: ComponentFixture<AcessoRemotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcessoRemotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcessoRemotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
