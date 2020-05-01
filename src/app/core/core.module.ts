/* import natif angular */
import { NgModule } from '@angular/core';
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

@NgModule({
  declarations: [HomeComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    NgxPageScrollModule,
    InesModule
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
  ]
})
export class CoreModule { }
