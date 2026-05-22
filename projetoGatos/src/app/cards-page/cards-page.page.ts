import { Component, OnInit } from '@angular/core';
import { GatoService } from '../services/gato.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards-page',
  templateUrl: './cards-page.page.html',
  styleUrls: ['./cards-page.page.scss'],
  standalone: false,
})

export class CardsPagePage implements OnInit {

  gatos: any[] = [];

  constructor(
    private gatoService: GatoService,
    private router: Router
  ) {}

  ngOnInit() {

    this.gatoService.getGatos()
      .subscribe(res => {

        this.gatos = res;

        console.log(res);

      });

  }

  async excluirGato(id: string) {

    await this.gatoService.deleteGato(id);

    console.log('Gato excluído');

  }

  editarGato(id: string) {
    this.router.navigate(['/cadastro-gatos'], { queryParams: { id: id } });
  }

}