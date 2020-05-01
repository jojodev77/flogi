import { NgModule, CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VitrineComponent } from './vitrine/vitrine.component';
import { PanierComponent } from './panier/panier.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { NgxPayPalModule } from 'ngx-paypal';


@NgModule({
  declarations: [VitrineComponent, PanierComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    NgxPayPalModule
  ],
  exports: [
PanierComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class AchatModule { }
