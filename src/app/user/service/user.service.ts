/* Import natif angular */
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse, HttpHeaders } from '@angular/common/http';


/* model */
import { Bijoux } from 'src/app/achat/models/bijoux.models';
import { environment } from 'src/environments/environment';

/* Import RXJS */
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

/* Services */
import { MessageService } from 'src/app/ines/services/message.service';

const optionRequete = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': 'https://www.floguiboutique.com'
  })
};
@Injectable({
  providedIn: 'root'
})
export class UserService {

  getBijoux: Bijoux[];
  accesRoot = false;

  /*url */
  bijouxUrl = environment.bijouxUrl;

  constructor(
    private http: HttpClient,
    private messageService: MessageService
    ) { }

connexionApproved() {
this.accesRoot = true;
}

  getBijouxOfSql(): Observable<Bijoux[]> {
    return this.http.get(`${this.bijouxUrl}/list`, optionRequete).pipe(
      map((res) => {
        // tslint:disable-next-line: no-string-literal
        this.getBijoux = res['data'];
        return this.getBijoux;
      }));
  }

  addBijoux(data: Bijoux) {

    this.http.post(`${this.bijouxUrl}/ajout`, data)
    .subscribe(
      res => {
        console.log(res);
        this.messageService.openModalSuccessAjoutBijoux();
      },
      err => {
        console.log('Error occured:' , err);
        this.messageService.openModalErrorAjoutBijoux();

      }

    );
  }
  creat(data: Bijoux): Observable<Bijoux[]> {
    return this.http.post(`${this.bijouxUrl}/ajout`, {data: data})
    .pipe(map((res) => {
   // this.http.post(`${this.bijouxUrl}/ajout`, data);
    this.getBijoux.push(res['data']);
    return this.getBijoux;
    }),
    catchError(this.handleError, ));
  }


  deleteBijoux(id: any): Observable<Bijoux[]> {
    const params = new HttpParams()
      .set('id', id.toString());
    {
      return this.http.delete(`${this.bijouxUrl}/delete/${id}`, { params })
        .pipe(map(res => {
          // tslint:disable-next-line:no-shadowed-variable
          const filteredBijouxs = this.getBijoux.filter((Bijoux) => {
            return +Bijoux.id !== +id;
          });
          return this.getBijoux = filteredBijouxs;
          this.messageService.openModalSuccesDelBijoux();
        }),
          catchError(this.handleError));
    }
  }



  // tslint:disable-next-line:no-shadowed-variable
  update(Bijoux: Bijoux): Observable<Bijoux[]> {

    return this.http.put(`${this.bijouxUrl}/put`, { data: Bijoux })
      .pipe(map((res) => {
        const theBijoux = this.getBijoux.find((item) => {
          console.log(item);
          console.log(Bijoux);
          return +item.id === +Bijoux.id;

        });
        if (theBijoux) {
          theBijoux.type = Bijoux.type;
          theBijoux.forme = Bijoux.forme;
          theBijoux.couleur = Bijoux.couleur;
          theBijoux.couleurdeux = Bijoux.couleurdeux;
          theBijoux.couleurtrois = Bijoux.couleurtrois;
          theBijoux.materiaux = Bijoux.materiaux;
          theBijoux.materiauxdeux = Bijoux.materiauxdeux;
          theBijoux.materiauxtrois = Bijoux.materiauxtrois;
          theBijoux.prix = +Bijoux.prix;
          theBijoux.image = Bijoux.image;
          theBijoux.information = Bijoux.information;
          theBijoux.stock = +Bijoux.stock;
        }
        return this.getBijoux;

      }),
        catchError(this.handleError));
  }
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
