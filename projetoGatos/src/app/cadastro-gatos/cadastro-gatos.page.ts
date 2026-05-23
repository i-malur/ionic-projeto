import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 
import { GatoService } from '../services/gato.service';

@Component({
  selector: 'app-cadastro-gatos',
  templateUrl: './cadastro-gatos.page.html',
  styleUrls: ['./cadastro-gatos.page.scss'],
  standalone: false
})
export class CadastroGatosPage implements OnInit {

  nome: string = '';
  descricao: string = '';
  urlFoto: string = ''; 

  gatoId: string | null = null;
  modoEdicao: boolean = false;   

  constructor(
    private gatoService: GatoService,
    private route: ActivatedRoute,
    private router: Router          
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.gatoId = params['id'];

      if (this.gatoId) {
        this.modoEdicao = true;
        this.carregarDadosDoGato(this.gatoId);
      }
    });
  }
  carregarDadosDoGato(id: string) {
    this.gatoService.getGatoById(id).subscribe(gato => {
      if (gato) {
        this.nome = gato.nome;
        this.descricao = gato.descricao;
        this.urlFoto = gato.foto; 
      }
    });
  }

  async salvarGato() {
    const dados = {
      nome: this.nome,
      descricao: this.descricao,
      foto: this.urlFoto
    };

    console.log(dados);

    if (this.modoEdicao && this.gatoId) {

      await this.gatoService.updateGato(this.gatoId, dados);
      console.log('Atualizado!');
    } else {

      await this.gatoService.addGato(dados);
      console.log('Salvo!');
    }

    this.nome = '';
    this.descricao = '';
    this.urlFoto = '';
    this.router.navigate(['/cards-page']);
  }

}