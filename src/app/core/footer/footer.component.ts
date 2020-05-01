import { Component, OnInit } from '@angular/core';
import { CoreService } from '../core.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

/* initilisation de la date et de l'heure */
  getDate = new Date();
  constructor(
    private coreService: CoreService
  ) { }

  ngOnInit() {

  }

}
