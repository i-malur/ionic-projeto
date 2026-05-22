import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Cards {

}

export interface Card {
  id: number;
  titulo: string;
  descricao: string;
  imagem: string;
}

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  private key = 'cards';

  // 🔹 pegar todos
  getAll(): Card[] {
    return JSON.parse(localStorage.getItem(this.key) || '[]');
  }

  // 🔹 salvar lista inteira
  saveAll(cards: Card[]) {
    localStorage.setItem(this.key, JSON.stringify(cards));
  }

  // 🔹 adicionar
  add(card: Card) {
    const cards = this.getAll();
    cards.push(card);
    this.saveAll(cards);
  }

  // 🔹 atualizar
  update(updated: Card) {
    let cards = this.getAll();
    cards = cards.map(c => c.id === updated.id ? updated : c);
    this.saveAll(cards);
  }

  // 🔹 deletar
  delete(id: number) {
    const cards = this.getAll().filter(c => c.id !== id);
    this.saveAll(cards);
  }
}
