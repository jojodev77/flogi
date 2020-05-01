/* import natif angular */
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

/* services */
import { CreateFormulaireService } from './create-service/create-formulaire.service';
import { Bijoux } from 'src/app/achat/models/bijoux.models';
import { UserService } from '../../service/user.service';
import { MessageService } from 'src/app/ines/services/message.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  Type = [
    { value: 1, viewValue : 'bagues' },
    { value: 2, viewValue : 'pendentifs' },
    { value: 3, viewValue : 'bracelets' },
    { value: 4, viewValue : 'boucles' },
    { value: 5, viewValue : 'colliers' },
    { value: 6, viewValue : 'broches' },
    { value: 7, viewValue : 'parures' },
    { value: 8, viewValue : 'bien-être' },
    { value: 9, viewValue : 'Tour de cou' },
    { value: 10, viewValue : 'Barrettes' },
    { value: 11, viewValue : 'Clips d oreillers' },
    { value: 12, viewValue : 'Porte clefs' },
];
Forme = [

 { value: 2, viewValue: 'coeur' },
 { value: 3, viewValue: 'rondes' },
 { value: 4, viewValue: 'rectangles' },
 { value: 5, viewValue: 'carrées' },
 { value: 6, viewValue: 'ovales' },
 { value: 7, viewValue: 'fleurs' },
 { value: 8, viewValue: 'spirales' },
 { value: 9, viewValue: 'anges' },
 { value: 10, viewValue: 'papillon' },
 { value: 11, viewValue: 'créoles' },
 { value: 12, viewValue: 'cabochon' },
 { value: 13, viewValue: 'fleur' },
];
Materiaux = [
 { value: 1, viewValue: 'métallique' },
    { value: 2, viewValue: 'céramique' },
    { value: 5, viewValue: 'strass' },
    { value: 6, viewValue: 'perles-magiques' },
    { value: 7, viewValue: 'fimo' },
    { value: 8, viewValue: 'velours' },
    { value: 9, viewValue: 'résine' },
    { value: 10, viewValue: 'rose aluminium' },
    { value: 11, viewValue: 'étoiles' },
    { value: 12, viewValue: 'breloques' },
    { value: 13, viewValue: 'ailes d\'anges' },
    { value: 14, viewValue: 'cabochon' },
    { value: 15, viewValue: 'papillon' },
    { value: 16, viewValue: 'perles craquelées ' },
    { value: 17, viewValue: 'lucite' },
    { value: 18, viewValue: 'liberty' },
    { value: 19, viewValue: 'fleurs' },
    { value: 20, viewValue: 'plume' },
    { value: 21, viewValue: 'pompom' },
    { value: 22, viewValue: 'perle mate' },
    { value: 23, viewValue: 'perle' },
    { value: 24, viewValue: 'oeil de chat' },
    { value: 25, viewValue: 'coupelles' },
    { value: 26, viewValue: 'verre givré' },
    { value: 27, viewValue: 'acrylique' },
    { value: 27, viewValue: 'grelot' },
    { value: 27, viewValue: 'perle acrylique' },
    { value: 27, viewValue: 'effet prisme' },
    { value: 27, viewValue: 'effet moon' },
    { value: 27, viewValue: 'perle en bois' },
    { value: 27, viewValue: 'perle de rocaille' },
    { value: 27, viewValue: 'perle givrée' },
    { value: 27, viewValue: 'aluminium' },
    { value: 27, viewValue: 'cuivre' },
    { value: 27, viewValue: 'métal argenté' },
    { value: 27, viewValue: 'laiton' },
    { value: 27, viewValue: 'perle indienne' },
    { value: 27, viewValue: 'suédine' },
    { value: 27, viewValue: 'fibule' },
    { value: 27, viewValue: 'epingle à nourrice' },

];
Couleur = [
    { value: 1, viewValue: 'bleu' },
    { value: 2, viewValue: 'rose' },
    { value: 3, viewValue: 'jaune' },
    { value: 4, viewValue: 'noir' },
    { value: 5, viewValue: 'blanc' },
    { value: 6, viewValue: 'vert' },
    { value: 7, viewValue: 'rouge' },
    { value: 8, viewValue: 'mat' },
    { value: 8, viewValue: 'beige' },
    { value: 9, viewValue: 'orange' },
    { value: 10, viewValue: 'argent' },
    { value: 11, viewValue: 'doré' },
    { value: 12, viewValue: 'violet' },
    { value: 13, viewValue: 'écru' },
    { value: 14, viewValue: 'turquoise' },
    { value: 15, viewValue: 'or' },
    { value: 16, viewValue: 'rose' },
    { value: 17, viewValue: 'marron' },
    { value: 18, viewValue: 'bicolore' },
    { value: 19, viewValue: 'multicolore' },
    { value: 20, viewValue: 'fluo' },
    { value: 21, viewValue: 'bronze' },
    { value: 22, viewValue: 'rose' },
    { value: 21, viewValue: 'or' },
    { value: 22, viewValue: 'bronze' },
    { value: 23, viewValue: 'saumon' },
    { value: 24, viewValue: 'mandarine' },
    { value: 21, viewValue: 'cuivre' },
    { value: 21, viewValue: 'ecossais' },
    { value: 21, viewValue: 'chocolat' },
    { value: 21, viewValue: 'or rose' },
];


createBijouxForm: FormGroup;
getBijoux: Bijoux[];
success: string;
error: string;
bjx = new Bijoux(null, '', '', '', '', '', '', '', '', null, '', '', null);

  constructor(
    private createBijouxFormulaire: CreateFormulaireService,
    private userService: UserService,
    private messageService: MessageService
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
        this.messageService.openModalSuccessAjoutBijoux();
      },
      (err) => this.messageService.openModalErrorAjoutBijoux()
    );
 }

}
