/* import natif angular */
import { Component, OnInit, OnDestroy, OnChanges, Injector, ViewChild, AfterViewInit } from '@angular/core';

/* import angulat material */
import { MatTableDataSource } from '@angular/material/table';

/* Service */
import { CoreService } from '../core.service';
import { AchatService } from 'src/app/achat/achat.service';
import { ServicesService } from 'src/app/user/administrator/update-del-service/services.service';


/* RXJS */
import { Subscription, interval } from 'rxjs';

/* Model */
import { Bijoux } from 'src/app/achat/models/bijoux.models';
import { Router } from '@angular/router';
import { MatDialog, MatSnackBar, Sort, MatSort, MatPaginator } from '@angular/material';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})



export class HomeComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {
  /* Model */
  displayedColumns: string[] = ['acheter', 'id', 'image', 'type', 'prix', 'materiaux', 'information', 'stock'];
  dataSource = new MatTableDataSource<Bijoux>();
  getBijoux: Bijoux[];
  articleNumber: any;
  arrayArticleNumber = Array<Bijoux>();
  articleNumber$ = Subscription;
  bijoux: Bijoux[];
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

  constructor(
    private coreService: CoreService,
    private achatService: AchatService,
    private router: Router,
    private snackBar: MatSnackBar,
    private injector: Injector,
  ) {
    this.dialog = this.injector.get(MatDialog);
    this.coreService.getBijouxOfSql().subscribe(
      (data: Bijoux[]) => {
        this.dataSource.data = data;
        this.sortedData = this.dataSource.data.slice();
        if (this.dataSource.data.length > 0) {
          this.run = false;
        }
      }
    );

  }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    // tslint:disable-next-line:no-unused-expression
    this.dataSource.paginator = this.paginator;
    this.router.navigate(['']);
    setTimeout(() => {
      this.controlNetworkData();
    }, 2000);
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
        console.log(elements);
        if (elements < 1) {
          console.log('PROBLEME DE CONNEXION INTERNET');
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

}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
