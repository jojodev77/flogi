/* import natif angular */
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

/* composant */
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


/* module */
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { NgxPageScrollModule } from 'ngx-page-scroll';


/* Service */
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [HomeComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    NgxPageScrollModule,
    FlexLayoutModule
  ],
  exports: [
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AngularMaterialModule
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class CoreModule { }
