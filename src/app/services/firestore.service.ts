import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, query, where } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Perfume } from '../models/perfume.model';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  constructor(private firestore: Firestore) {}

  getPerfumesByDesigner(designer: string): Observable<Perfume[]> {
    const perfumeCollection = collection(this.firestore, 'perfumes');
    const designerQuery = query(perfumeCollection, where('designer', '==', designer));
    return collectionData(designerQuery, { idField: 'id' }) as Observable<Perfume[]>;
  }
}
