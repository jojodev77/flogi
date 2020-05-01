/* import natif angular  */
import { NgModule } from '@angular/core';

/* module  */
import { CommonModule } from '@angular/common';
import { MentionsComponent } from './mentions/mentions.component';
import { PresentationComponent } from './presentation/presentation.component';
import { ContactComponent } from './contact/contact.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';

@NgModule({
  declarations: [MentionsComponent, PresentationComponent, ContactComponent],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [
MentionsComponent,
PresentationComponent,
ContactComponent
  ]
})
export class InformationModule { }
