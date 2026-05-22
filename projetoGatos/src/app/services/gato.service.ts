import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

import {
  Firestore,
  collection,
  addDoc,
  collectionData,
  deleteDoc,
  doc,
  docData,   // <-- ADICIONADO PARA BUSCAR POR ID
  updateDoc  // <-- ADICIONADO PARA ATUALIZAR
} from '@angular/fire/firestore';

import { Observable } from 'rxjs';

export interface CatFact {
  fact: string;
  length: number;
}

@Injectable({
  providedIn: 'root'
})
export class GatoService {

  private apiFactUrl = 'https://catfact.ninja/fact';

  constructor(
    private firestore: Firestore,
    private http: HttpClient 
  ) {}

  // ==========================================
  // SEUS MÉTODOS DO FIREBASE (ATUALIZADO)
  // ==========================================

  addGato(gato: any) {
    const gatosRef = collection(this.firestore, 'gatos');
    return addDoc(gatosRef, gato);
  }

  getGatos(): Observable<any[]> {
    const gatosRef = collection(this.firestore, 'gatos');
    return collectionData(
      gatosRef,
      { idField: 'id' }
    ) as Observable<any[]>;
  }

  deleteGato(id: string) {
    const gatoDoc = doc(this.firestore, `gatos/${id}`);
    return deleteDoc(gatoDoc);
  }

  // NOVO: Busca apenas um gato específico para carregar no formulário
  getGatoById(id: string): Observable<any> {
    const gatoDoc = doc(this.firestore, `gatos/${id}`);
    return docData(gatoDoc, { idField: 'id' });
  }

  // NOVO: Salva as alterações feitas no gato
  updateGato(id: string, gato: any) {
    const gatoDoc = doc(this.firestore, `gatos/${id}`);
    return updateDoc(gatoDoc, gato);
  }

  // ==========================================
  // MÉTODO PARA A API DE CURIOSIDADES
  // ==========================================

  getFact(): Observable<CatFact> {
    return this.http.get<CatFact>(this.apiFactUrl);
  }

}