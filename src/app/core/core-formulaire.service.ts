/* import natif angular */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

/* Model */
import { Bijoux } from '../achat/models/bijoux.models';

/* RXJS */
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class CoreFormulaireService {

    constructor(private fb: FormBuilder) {}

builForm(): FormGroup {
return this.fb.group({
  filtre: new FormControl(
    {
      value: '',
      disabled: false
    },
    {
      updateOn: 'change'
    }
  ),
});
}
}
