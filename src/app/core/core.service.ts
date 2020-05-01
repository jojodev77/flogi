/* import natif angular */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

/* Model */
import { Bijoux } from '../achat/models/bijoux.models';

/* RXJS */
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const optionRequete = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': 'https://www.floguiboutique.com'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CoreService {
/* model */
getBijoux: Bijoux[];

/*url */
bijouxUrl = environment.bijouxUrl;

  constructor(
    private http: HttpClient
  ) { }

getBijouxOfSql(): Observable<Bijoux[]> {
  return this.http.get(`${this.bijouxUrl}/list`).pipe(
    map((res) => {
      // tslint:disable-next-line: no-string-literal
      this.getBijoux = res['data'];
      return this.getBijoux;
  }));
}

}
