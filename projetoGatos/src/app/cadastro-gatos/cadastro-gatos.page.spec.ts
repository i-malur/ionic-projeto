import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroGatosPage } from './cadastro-gatos.page';

describe('CadastroGatosPage', () => {
  let component: CadastroGatosPage;
  let fixture: ComponentFixture<CadastroGatosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroGatosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
