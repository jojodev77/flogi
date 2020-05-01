/* Dépendences fonctionnelles internes d'Angular */
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

/* Model */
import { ModalComponnentComponent } from '../modal-componnent/modal-componnent.component';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  dialogRef: MatDialogRef<ModalComponnentComponent>;

  constructor(private dialog: MatDialog) { }

  openModalSuccesAddPanier() {
    this.dialogRef = this.dialog.open(ModalComponnentComponent, {
        height: '255px',
        panelClass: 'no-padding-dialog',
        disableClose: true,
        data: {
            instance: 'succes-postCharge'
        }
    });
}
openModalSuccesConnexion() {
  this.dialogRef = this.dialog.open(ModalComponnentComponent, {
      height: '255px',
      panelClass: 'no-padding-dialog',
      disableClose: true,
      data: {
          instance: 'succes-connexion'
      }
  });
}
openModalErrorConnexion() {
  this.dialogRef = this.dialog.open(ModalComponnentComponent, {
      height: '255px',
      panelClass: 'no-padding-dialog',
      disableClose: true,
      data: {
          instance: 'erreur-connexion'
      }
  });
}
openModalErrorPanier() {
  this.dialogRef = this.dialog.open(ModalComponnentComponent, {
      height: '255px',
      panelClass: 'no-padding-dialog',
      disableClose: true,
      data: {
          instance: 'panier-vide'
      }
  });
}
openModalSuccessAjoutBijoux() {
  this.dialogRef = this.dialog.open(ModalComponnentComponent, {
      height: '255px',
      panelClass: 'no-padding-dialog',
      disableClose: true,
      data: {
          instance: 'ajout-bijoux'
      }
  });
}
openModalErrorAjoutBijoux() {
  this.dialogRef = this.dialog.open(ModalComponnentComponent, {
      height: '255px',
      panelClass: 'no-padding-dialog',
      disableClose: true,
      data: {
          instance: 'echec-ajout-bijoux'
      }
  });
}
openModalErrorDelBijoux() {
  this.dialogRef = this.dialog.open(ModalComponnentComponent, {
      height: '255px',
      panelClass: 'no-padding-dialog',
      disableClose: true,
      data: {
          instance: 'echec-suppression'
      }
  });
}

openModalSuccesDelBijoux() {
  this.dialogRef = this.dialog.open(ModalComponnentComponent, {
      height: '255px',
      panelClass: 'no-padding-dialog',
      disableClose: true,
      data: {
          instance: 'succes-suppression'
      }
  });
}

openModalErrorGeneral() {
  this.dialogRef = this.dialog.open(ModalComponnentComponent, {
      height: '255px',
      panelClass: 'no-padding-dialog',
      disableClose: true,
      data: {
          instance: 'error-system'
      }
  });
}
openModalErrorUpdateBijoux() {
  this.dialogRef = this.dialog.open(ModalComponnentComponent, {
      height: '255px',
      panelClass: 'no-padding-dialog',
      disableClose: true,
      data: {
          instance: 'noupdate-bijoux'
      }
  });
}
openModalSuccesUpdateBijoux() {
  this.dialogRef = this.dialog.open(ModalComponnentComponent, {
      height: '255px',
      panelClass: 'no-padding-dialog',
      disableClose: true,
      data: {
          instance: 'update-bijoux'
      }
  });
}
}
