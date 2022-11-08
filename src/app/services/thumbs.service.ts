import { Injectable } from '@angular/core';
import { collection, collectionData, doc, Firestore, increment, onSnapshot, query, updateDoc, where } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import Celebrity from '../interfaces/celebrity.interface';

@Injectable({
  providedIn: 'root'
})
export class ThumbsService {

  constructor(private firestore: Firestore) { }

  getThumbs(): Observable<Celebrity[]> {
    const thumbRef = collection(this.firestore, 'thumbs');
    return collectionData(thumbRef, { idField: 'id' }) as Observable<Celebrity[]>;
  }

  getFeaturedThumb(): Observable<Celebrity[]> {
    const thumbRef = collection(this.firestore, 'thumbs');
    const filter = query(thumbRef, where('featured', '==', true));
    let thumbs: any[] = [];
    onSnapshot(filter, (snapshot) => {
      snapshot.docs.forEach(doc => {        
        thumbs.push({id: doc.id, ...doc.data()})
      });
    })
    return of(thumbs);
  }

  updateThumbs(id: string, up: boolean) {
    const thumbRef = doc(this.firestore, `thumbs/${id}`);
    return up ? updateDoc(thumbRef, {'votes.positive': increment(1)})
              : updateDoc(thumbRef, {'votes.negative': increment(1)});
  }
}
