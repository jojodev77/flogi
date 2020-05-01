/* import natif angular */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

/* composant */
import { AppComponent } from './app.component';

/* Module */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { AchatModule } from './achat/achat.module';
import { CoreModule } from './core/core.module';
import { UserModule } from './user/user.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InformationModule } from './information/information.module';
import { CreateFormulaireService } from './user/administator/create/create-service/create-formulaire.service';
import { InesModule } from './ines/ines.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    CoreModule,
    AchatModule,
    UserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    InformationModule,
    InesModule

  ],
  exports: [
    AngularMaterialModule,
    UserModule,
    CoreModule,
    InformationModule,
    InesModule
  ],
  providers: [CreateFormulaireService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
