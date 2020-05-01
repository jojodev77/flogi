/* Import natif Angular */
import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, RequiredValidator, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormulaireService {

  constructor(
private fb: FormBuilder
  ) { }

buildForm() {
return this.fb.group({
 name: new FormControl(
    {
        value: '',
        disabled: false
    },
    {
        validators: [
            Validators.required
        ],
        updateOn: 'change'
    }
),

 password: new FormControl(
    { value: '' },
    { updateOn: 'change' }
  )
});

}
}

