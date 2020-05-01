/* import natif angular */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* composant */
import { ModalComponnentComponent } from './modal-componnent/modal-componnent.component';

/* Service */
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { MessageService } from './services/message.service';

@NgModule({
  declarations: [ModalComponnentComponent],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [
    ModalComponnentComponent,
  ],
  entryComponents: [
    ModalComponnentComponent
  ],
  providers: [MessageService]
})
export class InesModule { }
