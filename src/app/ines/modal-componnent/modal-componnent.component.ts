import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { modalTypesConfig } from './modal.config';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-modal-componnent',
  templateUrl: './modal-componnent.component.html',
  styleUrls: ['./modal-componnent.component.scss']
})
export class ModalComponnentComponent implements OnInit {
  selectedModalType: any;
  modalMessage: string;
  ventilationError = [];
  typingErrors = [];

    constructor(
        @Inject(MAT_DIALOG_DATA) public passedData: any,
        public dialogRef: MatDialogRef<ModalComponnentComponent>
    ) {}

    ngOnInit() {
      this.selectedModalType = modalTypesConfig[this.passedData.instance];
      let message = this.selectedModalType.message;
      if (!isNullOrUndefined(this.passedData.nomFichier)) {
          message = message.replace(
              '{{ nomFichier }}',
              this.passedData.nomFichier
          );
      }
      if (!isNullOrUndefined(this.passedData.nomFichier)) {
          message = message.replace(
              '{{ nomParametre }}',
              this.passedData.nomParametre
          );
      }
      if (!isNullOrUndefined(this.passedData.typingErrors)) {
          let index = 3;
          if (this.passedData.typingErrors.error.errors.length < index) {
              index = this.passedData.typingErrors.error.errors.length;
          }
          for (let i = 0; i < index; i++) {
              this.typingErrors.push(this.passedData.typingErrors.error.errors[i].errorMessage);
          }
      }
      this.modalMessage = message;
      this.init_ventilationError();
  }

  init_ventilationError(): void {
      if (this.passedData.ventilationError) {
          for (const elem of this.passedData.ventilationError.error.errors) {
              if (elem.rejectedValue.moCode) {
                  this.ventilationError.push(elem.rejectedValue.moCode);
              } else {
                  this.ventilationError.push(elem.rejectedValue.receptionCode);
              }
          }
          this.ventilationError = this.ventilationError.filter((elem, i, self) => i === self.indexOf(elem));
      }
  }

  annuler(): void {
      this.dialogRef.close();
  }

  quitter(): void {
      this.dialogRef.close(this.selectedModalType.callback);
  }
}
