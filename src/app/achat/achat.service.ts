/* Import natif angular */
import { Injectable } from '@angular/core';

/* RXJS */
import { Subject, Observable, BehaviorSubject } from 'rxjs';

/* Models */
import { Bijoux } from './models/bijoux.models';

@Injectable({
  providedIn: 'root'
})
export class AchatService {
  articleNumber = new Subject<any>();
  arrayArticleNumber: Array<Bijoux>;
  articleNumber$: Observable<any>;
  private subject: BehaviorSubject<Bijoux[]> = new BehaviorSubject<Bijoux[]>(null);

  constructor() {
   // this.updateArticleNumber(JSON.parse(sessionStorage.getItem('BIJOUX')));
  }

  // afficher article du pannier enregistre dans le storage
  get ArticleNumber(): Observable<Bijoux[]> {
    return this.subject.asObservable();
    console.log(this.subject);
  }

  /* Mise a jour du subject */
  updateArticleNumber(bijoux: Bijoux[]): void {
this.arrayArticleNumber = bijoux;
      // tslint:disable-next-line: align
      sessionStorage.setItem('BIJOUX', JSON.stringify(this.arrayArticleNumber));
      // tslint:disable-next-line: align
      this.subject.next(bijoux);

  }

getNumberOfBijoux(): Observable<any> {
return this.articleNumber.asObservable();
}
}
