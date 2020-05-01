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
import { InesModule } from '../ines/ines.module';

/* Service */
import { MessageService } from '../ines/services/message.service';
import { ModalComponnentComponent } from '../ines/modal-componnent/modal-componnent.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [HomeComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    NgxPageScrollModule,
    InesModule,
    FlexLayoutModule
  ],
  exports: [
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AngularMaterialModule
  ],
  entryComponents: [
    ModalComponnentComponent
  ],
  providers: [
    MessageService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class CoreModule { }
