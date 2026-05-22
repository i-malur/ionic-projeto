import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // 1. Adicionado ActivatedRoute e Router
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
  urlFoto: string = ''; // Mantida sua variável original

  gatoId: string | null = null; // Guarda o ID para saber se é edição
  modoEdicao: boolean = false;   // Controla o comportamento da tela

  constructor(
    private gatoService: GatoService,
    private route: ActivatedRoute, // 2. Injetado para ler a URL
    private router: Router          // Injetado para voltar de página
  ) {}

  ngOnInit() {
    // 3. Escuta a URL para ver se chegou um ID de edição
    this.route.queryParams.subscribe(params => {
      this.gatoId = params['id'];

      if (this.gatoId) {
        this.modoEdicao = true;
        this.carregarDadosDoGato(this.gatoId);
      }
    });
  }

  // 4. Busca o gato no Firebase e preenche as caixas de texto na tela
  carregarDadosDoGato(id: string) {
    this.gatoService.getGatoById(id).subscribe(gato => {
      if (gato) {
        this.nome = gato.nome;
        this.descricao = gato.descricao;
        this.urlFoto = gato.foto; // Puxa do campo 'foto' do banco e joga na sua variável
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
      // 5. Se estiver editando, chama a função de update
      await this.gatoService.updateGato(this.gatoId, dados);
      console.log('Atualizado!');
    } else {
      // Se não tiver ID, adiciona um novo gato normalmente
      await this.gatoService.addGato(dados);
      console.log('Salvo!');
    }

    // Limpa os campos e volta para a tela de cards
    this.nome = '';
    this.descricao = '';
    this.urlFoto = '';
    this.router.navigate(['/cards-page']);
  }

}