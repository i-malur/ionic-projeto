import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  // O Router precisa estar aqui no construtor
  constructor(private router: Router) {}

  // ESSA FUNÇÃO PRECISA EXISTIR AQUI DENTRO!
  irParaCards() {
    this.router.navigate(['/cards-page']);
  }

}