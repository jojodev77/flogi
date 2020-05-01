/* Import natif angular */
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

/* Services */
import { FormulaireService } from '../service/formulaire.service';
import { MessageService } from 'src/app/ines/services/message.service';
import { UserService } from '../service/user.service';

/* Model */
import { User } from '../models/user.model';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  signinForm: FormGroup;


  constructor(
    private formulaireService: FormulaireService,
    private userService: UserService,
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.signinForm = this.formulaireService.buildForm();
    const bobo = sessionStorage.getItem('ADMIN');
    if (bobo === 'admin') {
      this.userService.connexionApproved();
      this.router.navigate(['/administrator']);
    }

  }

  controlUser() {
    const result: User = this.signinForm.getRawValue();
    if (result.name === 'admin' && result.password === 'toto') {
      this.messageService.openModalSuccesConnexion(),
        this.userService.connexionApproved();
      const toto = result.name;
      sessionStorage.setItem('ADMIN', toto);
      this.router.navigate(['/administrator']);
    } else {
      this.messageService.openModalErrorConnexion(),
        this.router.navigate(['']);
    }
  }
  signout() {

  }
}
