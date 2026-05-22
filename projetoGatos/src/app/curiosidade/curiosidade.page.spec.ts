import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CuriosidadePage } from './curiosidade.page';

describe('CuriosidadePage', () => {
  let component: CuriosidadePage;
  let fixture: ComponentFixture<CuriosidadePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CuriosidadePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
