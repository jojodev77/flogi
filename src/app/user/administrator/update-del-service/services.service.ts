
/* import natif angular */
import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Bijoux } from 'src/app/achat/models/bijoux.models';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private fb: FormBuilder) { }

  buildForm(bijoux: Bijoux[]) {
    return this.fb.group({
     id: new FormControl(
        {
          value: '',
          disabled: false
        },
        {
          updateOn: 'change'
        }
      ),
     type: new FormControl(
        {
          value: '',
          disabled: false
        },
        {
          updateOn: 'change'
        }
      ),
     forme: new FormControl(
        {
          value: '',
          disabled: false
        },
        {
          updateOn: 'change'
        }
      ),
     materiaux: new FormControl(
        {
          value: '',
          disabled: false
        },
        {
          updateOn: 'change'
        }
      ),
      materiauxdeux: new FormControl(
        {
          value: '',
          disabled: false
        },
        {
          updateOn: 'change'
        }
      ),
     materiauxtrois: new FormControl(
        {
          value: '',
          disabled: false
        },
        {
          updateOn: 'change'
        }
      ),
      couleur: new FormControl(
        {
          value: '',
          disabled: false
        },
        {
          updateOn: 'change'
        }
      ),
      couleurdeux: new FormControl(
        {
          value: '',
          disabled: false
        },
        {
          updateOn: 'change'
        }
      ),
      couleurtrois: new FormControl(
        {
          value: '',
          disabled: false
        },
        {
          updateOn: 'change'
        }
      ),
     prix: new FormControl(
        {
          value: '',
          disabled: false
        },
        {
          updateOn: 'change'
        }
      ),
      image: new FormControl(
        {
          value: '',
          disabled: false
        },
        {
          updateOn: 'change'
        }
      ),
      information: new FormControl(
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
