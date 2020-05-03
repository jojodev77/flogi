/* import natif angular */
import { Component, OnInit, OnDestroy, OnChanges, Injector, ViewChild, AfterViewInit } from '@angular/core';

/* import angulat material */
import { MatTableDataSource } from '@angular/material/table';

/* Service */
import { CoreService } from '../core.service';
import { AchatService } from 'src/app/achat/achat.service';
import { ServicesService } from 'src/app/user/administrator/update-del-service/services.service';


/* RXJS */
import { Subscription, interval, Observable } from 'rxjs';

/* Model */
import { Bijoux } from 'src/app/achat/models/bijoux.models';
import { Router } from '@angular/router';
import { MatDialog, MatSnackBar, Sort, MatSort, MatPaginator } from '@angular/material';
import { FormGroup } from '@angular/forms';
import { CoreFormulaireService } from '../core-formulaire.service';
import { startWith, map, tap } from 'rxjs/operators';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})



export class HomeComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {
  /* Model */
  displayedColumns: string[] = ['acheter', 'id', 'image', 'type', 'prix', 'materiaux', 'information', 'stock'];
  dataSource = new MatTableDataSource<Bijoux>();
  getBijoux: Bijoux[] = [];
  articleNumber: any;
  arrayArticleNumber = Array<Bijoux>();
  articleNumber$ = Subscription;
  bijoux: Bijoux[] = [];
  durationInSeconds = 5;
  private dialog;
  sortedData: Bijoux[];
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  timer$ = interval(1000);
  actionTimer: number;
  /* variable du spinner */
  run = false;
  color = 'primary';
  mode = 'indeterminate';
  value = 50;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  homeForm: FormGroup;
  type: string[] = [];
  filteredType: Observable<any[]>;
  dataSubscription: Subscription;
  Type = [
    { value: 1, viewValue : 'liste complête' },
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
    { value: 12, viewValue : 'Bagues' },
];

  constructor(
    private coreService: CoreService,
    private achatService: AchatService,
    private router: Router,
    private injector: Injector,
    private coreFormulaireService: CoreFormulaireService
  ) {
    this.homeForm = this.coreFormulaireService.builForm();
    this.dialog = this.injector.get(MatDialog);
  }

  ngOnInit() {
    this.homeForm = this.coreFormulaireService.builForm();
    this.coreService.getBijouxOfSql().subscribe(
      (data: Bijoux[]) => {
        this.dataSource.data = data;
        this.bijoux = data;
        this.getBijoux = data;
        // tslint:disable-next-line:prefer-for-of
        this.sortedData = this.dataSource.data.slice();
        if (this.dataSource.data.length > 0) {
          this.run = false;
        }
      }
    );
    this.dataSource.sort = this.sort;
    // tslint:disable-next-line:no-unused-expression
    this.dataSource.paginator = this.paginator;
    this.router.navigate(['']);
    setTimeout(() => {
      this.controlNetworkData();
    }, 2000);
    // tslint:disable-next-line:prefer-for-of
    for (let index = 0; index < this.Type.length; index++) {
      this.type.push(this.Type[index].viewValue);
    }
    this.filteredType = this.homeForm.get('filtre').valueChanges
    .pipe(
      startWith(''),
      map(value => this._filterFiltre(value))
    );
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    if (this.dataSource.data.length > 0) {
      this.run = false;
    }
  }

  ngOnChanges() {

  }
  ngOnDestroy() {

  }

  controlNetworkData() {
    if (this.dataSource.data.length < 1) {
      for (let index = 0; index < 2; index++) {
        const elements = index;
        if (elements < 1) {
          alert('PROBLEME DE CONNEXION INTERNET, RECHARGEMENT AUTOMATIQUE EN COURS');
          location.reload();
        }
      }

    } else {
      return;
    }
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  panierRouting() {
    if (this.articleNumber > 0) {
      this.router.navigate(['/panier']);
    } else {
   //   this.messageService.openModalErrorPanier();
    }

  }

  addPanier(id: Bijoux) {
    this.arrayArticleNumber.push(id);
    this.achatService.updateArticleNumber(this.arrayArticleNumber);
    this.achatService.ArticleNumber.subscribe(
      data => { this.bijoux = data; }
    );
    this.articleNumber = this.bijoux.length;
    // this.messageService.openModalSuccesAddPanier();
    // this.messageService.dialogRef.beforeClosed().subscribe(result => {
    //   if (result === 'succes-postCharge') {
    //     this.router.navigate(['/']);
    //   }
    // });
  }
  openSnackBar() {
    // tslint:disable-next-line: no-use-before-declare
  }

  private _filterFiltre(value: string): any[] {
  const filterValue = value.toLowerCase();

  return this.type.filter(option => option.toLowerCase().includes(filterValue));
  }

  dataResult(element: string) {
    if (element === 'liste complête') {
      this.dataSource.data = this.bijoux;
    } else {
     const cer = this.dataSource.data;
     cer.filter(data => {data.type = element; }
      );
    }
    }

}
function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
