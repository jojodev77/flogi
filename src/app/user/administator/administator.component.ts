/* Import natif angular */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
/* service */
import { UserService } from '../service/user.service';

/* Bijoux */
import { Bijoux } from 'src/app/achat/models/bijoux.models';


@Component({
  selector: 'app-administator',
  templateUrl: './administator.component.html',
  styleUrls: ['./administator.component.scss']
})
export class AdministatorComponent implements OnInit {

getBijoux: Bijoux[];
bijouxForm: FormGroup;
bijouxLength: number;
  constructor(
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.userService.getBijouxOfSql().subscribe(
      (data: Bijoux[]) => {
        this.getBijoux = data;
        this.bijouxLength = this.getBijoux.length; }
    );

  }


}
