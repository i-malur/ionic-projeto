import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

import {
  Firestore,
  collection,
  addDoc,
  collectionData,
  deleteDoc,
  doc,
  docData,   
  updateDoc  
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

  getGatoById(id: string): Observable<any> {
    const gatoDoc = doc(this.firestore, `gatos/${id}`);
    return docData(gatoDoc, { idField: 'id' });
  }

  updateGato(id: string, gato: any) {
    const gatoDoc = doc(this.firestore, `gatos/${id}`);
    return updateDoc(gatoDoc, gato);
  }

  getFact(): Observable<CatFact> {
    return this.http.get<CatFact>(this.apiFactUrl);
  }

}