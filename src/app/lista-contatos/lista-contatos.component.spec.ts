import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LitaContatosComponent } from './lita-contatos.component';

describe('LitaContatosComponent', () => {
  let component: LitaContatosComponent;
  let fixture: ComponentFixture<LitaContatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LitaContatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LitaContatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
