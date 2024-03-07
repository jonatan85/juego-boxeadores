import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormularioCrearPage } from './formulario-crear.page';

describe('FormularioCrearPage', () => {
  let component: FormularioCrearPage;
  let fixture: ComponentFixture<FormularioCrearPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FormularioCrearPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
