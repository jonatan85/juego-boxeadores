import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RingPage } from './ring.page';

describe('RingPage', () => {
  let component: RingPage;
  let fixture: ComponentFixture<RingPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
