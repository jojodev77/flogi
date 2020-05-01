/* import natif angular  */
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

/* module */
import { CommonModule } from '@angular/common';

/* composant */
import { AdministatorComponent } from './administator/administator.component';
import { SigninComponent } from './signin/signin.component';
import { CreateComponent } from './administator/create/create.component';
import { UpdateDelComponent } from './administator/update-del/update-del.component';

/* Services */
import { CreateFormulaireService } from '../user/administator/create/create-service/create-formulaire.service';



@NgModule({
  declarations: [SigninComponent, AdministatorComponent, CreateComponent, UpdateDelComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    SigninComponent,
    AdministatorComponent,
    CreateComponent,
    UpdateDelComponent,
    AngularMaterialModule
  ],
  providers: [
    CreateFormulaireService
  ]
})
export class UserModule { }
