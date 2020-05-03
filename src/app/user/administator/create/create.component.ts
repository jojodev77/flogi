/* import natif angular */
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

/* services */
import { CreateFormulaireService } from './create-service/create-formulaire.service';
import { Bijoux } from 'src/app/achat/models/bijoux.models';
import { UserService } from '../../service/user.service';
import { DialogService } from 'src/app/dialogUser/services/dialog.service';
import { AlertType } from 'src/app/dialogUser/dialog/dialog.component';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  Type = [
    { value: 1, viewValue : 'Bagues' },
    { value: 2, viewValue : 'Pendentifs' },
    { value: 3, viewValue : 'Bracelets' },
    { value: 4, viewValue : 'Boucles' },
    { value: 5, viewValue : 'Colliers' },
    { value: 6, viewValue : 'Broches' },
    { value: 7, viewValue : 'Parures' },
    { value: 8, viewValue : 'Bien-être' },
    { value: 9, viewValue : 'Tour de cou' },
    { value: 10, viewValue : 'Barrettes' },
    { value: 11, viewValue : 'Clips d oreillers' },
    { value: 12, viewValue : 'Porte clefs' },
];
Forme = [

 { value: 2, viewValue: 'Coeur' },
 { value: 3, viewValue: 'Rondes' },
 { value: 4, viewValue: 'Rectangles' },
 { value: 5, viewValue: 'Carrées' },
 { value: 6, viewValue: 'Ovales' },
 { value: 7, viewValue: 'Fleurs' },
 { value: 8, viewValue: 'Spirales' },
 { value: 9, viewValue: 'Anges' },
 { value: 10, viewValue: 'Papillon' },
 { value: 11, viewValue: 'Créoles' },
 { value: 12, viewValue: 'Cabochon' },
 { value: 13, viewValue: 'Fleur' },
];
Materiaux = [
 { value: 1, viewValue: 'Métallique' },
    { value: 2, viewValue: 'Céramique' },
    { value: 5, viewValue: 'Strass' },
    { value: 6, viewValue: 'Perles-magiques' },
    { value: 7, viewValue: 'Fimo' },
    { value: 8, viewValue: 'Velours' },
    { value: 9, viewValue: 'Résine' },
    { value: 10, viewValue: 'Rose aluminium' },
    { value: 11, viewValue: 'Etoiles' },
    { value: 12, viewValue: 'Breloques' },
    { value: 13, viewValue: 'Ailes d\'anges' },
    { value: 14, viewValue: 'Cabochon' },
    { value: 15, viewValue: 'Papillon' },
    { value: 16, viewValue: 'Perles craquelées ' },
    { value: 17, viewValue: 'Lucite' },
    { value: 18, viewValue: 'Liberty' },
    { value: 19, viewValue: 'Fleurs' },
    { value: 20, viewValue: 'Plume' },
    { value: 21, viewValue: 'Pompom' },
    { value: 22, viewValue: 'Perle mate' },
    { value: 23, viewValue: 'Perle' },
    { value: 24, viewValue: 'Oeil de chat' },
    { value: 25, viewValue: 'Coupelles' },
    { value: 26, viewValue: 'Verre givré' },
    { value: 27, viewValue: 'Acrylique' },
    { value: 27, viewValue: 'Grelot' },
    { value: 27, viewValue: 'Perle acrylique' },
    { value: 27, viewValue: 'Effet prisme' },
    { value: 27, viewValue: 'Effet moon' },
    { value: 27, viewValue: 'Perle en bois' },
    { value: 27, viewValue: 'Perle de rocaille' },
    { value: 27, viewValue: 'Perle givrée' },
    { value: 27, viewValue: 'Aluminium' },
    { value: 27, viewValue: 'Cuivre' },
    { value: 27, viewValue: 'Métal argenté' },
    { value: 27, viewValue: 'Laiton' },
    { value: 27, viewValue: 'Perle indienne' },
    { value: 27, viewValue: 'Suédine' },
    { value: 27, viewValue: 'Fibule' },
    { value: 27, viewValue: 'Epingle à nourrice' },
    { value: 27, viewValue: 'Agate' },
    { value: 27, viewValue: 'Aigue-marine'},
    { value: 27, viewValue: 'Amazonite'},
    { value: 27, viewValue: 'Ambre'},
    { value: 27, viewValue: 'Amethyste'},
    { value: 27, viewValue: 'Amnomite'},
    { value: 27, viewValue: 'Apatite'},
    { value: 27, viewValue: 'Aventurine'},
    { value: 27, viewValue: 'Bois fosssilisé'},
    { value: 27, viewValue: 'Bouddha'},
    { value: 27, viewValue: 'Chiastolite'},
    { value: 27, viewValue: 'Calcédoine'},
    { value: 27, viewValue: 'Calcite'},
    { value: 27, viewValue: 'Celestite'},
    { value: 27, viewValue: 'Citrine'},
    { value: 27, viewValue: 'Cornaline'},
    { value: 27, viewValue: 'Cuivre'},
    { value: 27, viewValue: 'Cyanite'},
    { value: 27, viewValue: 'Dent de requin'},
    { value: 27, viewValue: 'Fossile'},
    { value: 27, viewValue: 'Fluorite'},
    { value: 27, viewValue: 'Grenat almandin'},
    { value: 27, viewValue: 'Hemanite'},
    { value: 27, viewValue: 'Jade néphrite'},
    { value: 27, viewValue: 'Jaspe'},
    { value: 27, viewValue: 'Labradorite'},
    { value: 27, viewValue: 'Lapis Lazulli'},
    { value: 27, viewValue: 'Larimar'},
    { value: 27, viewValue: 'Pierre de lave'},
    { value: 27, viewValue: 'Pierre naturelle'},
    { value: 27, viewValue: 'Pierre de lune'},
    { value: 27, viewValue: 'Howlite/Magnesite'},
    { value: 27, viewValue: 'Météorite'},
    { value: 27, viewValue: 'Moldavite'},
    { value: 27, viewValue: 'Moquis'},
    { value: 27, viewValue: 'Nacre'},
    { value: 27, viewValue: 'Oeil de tigre'},
    { value: 27, viewValue: 'Obsidienne'},
    { value: 27, viewValue: 'Oeil de faucon'},
    { value: 27, viewValue: 'Opale'},
    { value: 27, viewValue: 'Pinas(Isis et Osiris'},
    { value: 27, viewValue: 'Pyrite'},
    { value: 27, viewValue: 'Quartz'},
    { value: 27, viewValue: 'Quartz Fumé'},
    { value: 27, viewValue: 'Quartz rose'},
    { value: 27, viewValue: 'Turquoise'},
    { value: 27, viewValue: 'Sodaline'},
    { value: 27, viewValue: 'Septarian'},
    { value: 27, viewValue: 'Shungite'},
    { value: 27, viewValue: 'Rhodocrosite'},
    { value: 27, viewValue: 'Shiva Lingam'},


];
Couleur = [
    { value: 1, viewValue: 'Bleu' },
    { value: 2, viewValue: 'Rose' },
    { value: 3, viewValue: 'Jaune' },
    { value: 4, viewValue: 'Noir' },
    { value: 5, viewValue: 'Blanc' },
    { value: 6, viewValue: 'Vert' },
    { value: 7, viewValue: 'Rouge' },
    { value: 8, viewValue: 'Mat' },
    { value: 8, viewValue: 'Beige' },
    { value: 9, viewValue: 'Orange' },
    { value: 10, viewValue: 'Argent' },
    { value: 11, viewValue: 'Doré' },
    { value: 12, viewValue: 'Violet' },
    { value: 13, viewValue: 'Ecru' },
    { value: 14, viewValue: 'Turquoise' },
    { value: 15, viewValue: 'Or' },
    { value: 16, viewValue: 'Rose' },
    { value: 17, viewValue: 'Marron' },
    { value: 18, viewValue: 'Bicolore' },
    { value: 19, viewValue: 'Multicolore' },
    { value: 20, viewValue: 'Fluo' },
    { value: 21, viewValue: 'Bronze' },
    { value: 22, viewValue: 'Rose' },
    { value: 21, viewValue: 'Or' },
    { value: 22, viewValue: 'Bronze' },
    { value: 23, viewValue: 'Saumon' },
    { value: 24, viewValue: 'Mandarine' },
    { value: 21, viewValue: 'Cuivre' },
    { value: 21, viewValue: 'Ecossais' },
    { value: 21, viewValue: 'Chocolat' },
    { value: 21, viewValue: 'Or rose' },
];


createBijouxForm: FormGroup;
getBijoux: Bijoux[];
success: string;
error: string;
bjx = new Bijoux(null, '', '', '', '', '', '', '', '', null, '', '', null);

  constructor(
    private createBijouxFormulaire: CreateFormulaireService,
    private userService: UserService,
    private dialogService: DialogService
  ) { }

  ngOnInit() {
   this.createBijouxForm = this.createBijouxFormulaire.buildForm();
  }

  addBijoux() {
const result = this.createBijouxForm.getRawValue();
this.userService.creat(result).subscribe(
      (res: Bijoux[]) => {
        // Update the list of cars
        console.log(res);
        this.getBijoux = res;

        // Inform the user
        this.dialogService.openAlertModal( ' ENREGISTREMENT REUSSI', AlertType.INFO);
      },
      (err) =>  this.dialogService.openAlertModal( 'ECHEC DE L\' ENREGISTREMENT', AlertType.WARNING));
 }

}
