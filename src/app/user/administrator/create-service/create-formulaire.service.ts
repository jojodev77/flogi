/* import natif angular */
import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CreateFormulaireService {

  constructor(private fb: FormBuilder) { }

  buildForm() {
    return this.fb.group({
     type: new FormControl(
        {
          value: '',
          disabled: false
        },
        {
          validators: [Validators.required],
          updateOn: 'change'
        }
      ),
     forme: new FormControl(
        {
          value: '',
          disabled: true
        },
        {
          validators: [Validators.required],
          updateOn: 'change'
        }
      ),
     materiaux: new FormControl(
        {
          value: '',
          disabled: true
        },
        {
          validators: [Validators.required],
          updateOn: 'change'
        }
      ),
      materiauxdeux: new FormControl(
        {
          value: '',
          disabled: true
        },
        {
          validators: [Validators.required],
          updateOn: 'change'
        }
      ),
     materiauxtrois: new FormControl(
        {
          value: '',
          disabled: true
        },
        {
          validators: [Validators.required],
          updateOn: 'change'
        }
      ),
      couleur: new FormControl(
        {
          value: '',
          disabled: true
        },
        {
          validators: [Validators.required],
          updateOn: 'change'
        }
      ),
      couleurdeux: new FormControl(
        {
          value: '',
          disabled: true
        },
        {
          validators: [Validators.required],
          updateOn: 'change'
        }
      ),
      couleurtrois: new FormControl(
        {
          value: '',
          disabled: true
        },
        {
          validators: [Validators.required],
          updateOn: 'change'
        }
      ),
     prix: new FormControl(
        {
          value: '',
          disabled: true
        },
        {
          validators: [Validators.required],
          updateOn: 'change'
        }
      ),
      image: new FormControl(

      ),
    information: new FormControl(
        {
          value: '',
          disabled: false
        },
        {
          validators: [Validators.required],
          updateOn: 'change'
        }
      ),
    });
  }
}
