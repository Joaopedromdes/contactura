import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FromUsuariosComponent } from './from-usuarios.component';

describe('FromUsuariosComponent', () => {
  let component: FromUsuariosComponent;
  let fixture: ComponentFixture<FromUsuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromUsuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
