/* Import natif angular */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Composant */
import { HomeComponent } from './core/home/home.component';
import { PanierComponent } from './achat/panier/panier.component';
import { PresentationComponent } from './information/presentation/presentation.component';
import { MentionsComponent } from './information/mentions/mentions.component';
import { SigninComponent } from './user/signin/signin.component';
import { AdministatorComponent } from './user/administator/administator.component';
import { UserGuardService } from './user/service/user-guard.service';

const routes: Routes = [
/* Home routing */
{path: 'home', component: HomeComponent},
{path: '', component: HomeComponent, pathMatch: 'full'},

/* achat routing */
 {path: 'panier', component: PanierComponent},

/* presentation routing */
{path: 'presentation', component: PresentationComponent},
{path: 'mentions', component: MentionsComponent},

/* user routing  */
{path: 'signin', component: SigninComponent},
  {path: 'administrator', component: AdministatorComponent, canActivate: [UserGuardService],
   }

];




@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
