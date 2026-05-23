import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { GatoService, CatFact } from '../services/gato.service'; 
import { HttpClient } from '@angular/common/http'; 

@Component({
  selector: 'app-curiosidade',
  templateUrl: './curiosidade.page.html',
  styleUrls: ['./curiosidade.page.scss'],
  standalone: false
})
export class CuriosidadePage implements OnInit {

  fatoDoGato: string = 'Carregando mistérios felinos... 🐈';

  constructor(
    private gatoService: GatoService,
    private router: Router,
    private http: HttpClient 
  ) { }

  ngOnInit() {
    this.buscarNovoFato();
  }

  irParaCards() {
    this.router.navigate(['/cards-page']); 
  }

  buscarNovoFato() {
    this.fatoDoGato = 'Buscando mais um mistério... 🐈';
    
    this.gatoService.getFact().subscribe({
      next: (data: CatFact) => {
        
        const urlTraducao = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(data.fact)}&langpair=en|pt`;
        
        this.http.get<any>(urlTraducao).subscribe({
          next: (res) => {
          
            this.fatoDoGato = res.responseData.translatedText;
          },
          error: () => {
            this.fatoDoGato = data.fact;
          }
        });
      },
      error: (err) => {
        console.error(err);
        this.fatoDoGato = 'Miau! Não foi possível buscar um fato novo agora. 😿';
      }
    });
  }
}