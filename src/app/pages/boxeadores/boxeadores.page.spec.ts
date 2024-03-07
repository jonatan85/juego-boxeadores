import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BoxeadoresPage } from './boxeadores.page';

describe('BoxeadoresPage', () => {
  let component: BoxeadoresPage;
  let fixture: ComponentFixture<BoxeadoresPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BoxeadoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
