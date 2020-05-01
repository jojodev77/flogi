/* Import natif angular */
import { Component, OnInit, AfterViewChecked } from '@angular/core';

/* Service */
import { AchatService } from '../achat.service';
import { CoreService } from 'src/app/core/core.service';
import { IPayPalConfig, ICreateOrderRequest   } from 'ngx-paypal';

/* RXJS */
import { Subscription } from 'rxjs';

/* Models */
import { Bijoux } from '../models/bijoux.models';
declare let paypal: any;

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {
  bijoux: Bijoux[];
  arrayPanierBijoux = new Array<Bijoux[]>();
  pricePost = 0;
  totalPrice = 0;
  priceToPayed: any;
  addScript = false;
  paypalLoad = true;
  public payPalConfig?: IPayPalConfig;
  finalAmount = this.priceToPayed;
  prixpaypal: any;
  submitted = false;
  showSuccess: boolean;

  constructor(
    private achatService: AchatService,
    private coreService: CoreService
  ) { }


  ngOnInit() {
    this.achatService.ArticleNumber.subscribe(
      data => { this.bijoux = data; }
    );
    let total = 0;
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.bijoux.length; i++) {
      total += Number(this.bijoux[i].prix);
      this.totalPrice = total;
      this.pricePost = 4.20;
      if (this.bijoux.length > 7) {
        this.pricePost = 6.30;
      }
      this.priceToPayed = this.pricePost + this.totalPrice;
      this.prixpaypal = this.priceToPayed;
    }
    this.initConfig();
  }
  /*
  paimentPaypal() {
    this.prixpaypal = this.priceToPayed;
    this.finalAmount = this.priceToPayed;
  }
  // tslint:disable-next-line:member-ordering
  paypalConfig = {
    env: 'production',
    client: {
      sandbox: '',
      production: 'AXYs81vHjBGtDPu-FJ83YDXSz5X9MDYs3d7i8OhxMH8YHTmpaB2tomEl9nFpHEXqnAwj4uB4KMNJkXGq'
    },
    commit: true,
    payment: (data, actions) => {
      return actions.payment.create({
        payment: {
          transactions: [
            { amount: { total: this.finalAmount, currency: 'EUR' } }
          ]
        }
      });
    },
    onAuthorize: (data, actions) => {
      return actions.payment.execute().then((payment) => {
        // Do something when payment is successful.
      });
    }
  };

  ngAfterViewChecked(): void {
    if (!this.addScript) {
      this.addPaypalScript().then(() => {
        paypal.Button.render(this.paypalConfig, '#paypal-checkout-btn');
        this.paypalLoad = false;
      });
    }
  }

  addPaypalScript() {
    this.addScript = true;
    return new Promise((resolve, reject) => {
      const scripttagElement = document.createElement('script');
      scripttagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
      scripttagElement.onload = resolve;
      document.body.appendChild(scripttagElement);
    });
  }
*/

private initConfig(): void {
  this.payPalConfig = {
  currency: 'EUR',
  clientId: 'AXYs81vHjBGtDPu-FJ83YDXSz5X9MDYs3d7i8OhxMH8YHTmpaB2tomEl9nFpHEXqnAwj4uB4KMNJkXGq',
  // tslint:disable-next-line:no-angle-bracket-type-assertion
  createOrderOnClient: (data) => <ICreateOrderRequest> {
    intent: 'CAPTURE',
    purchase_units: [
      {
        amount: {
          currency_code: 'EUR',
          value: this.priceToPayed.toString(),
          breakdown: {
            item_total: {
              currency_code: 'EUR',
              value: this.priceToPayed.toString()
            }
          }
        },
        items: [
          {
            name: 'bijoux',
            quantity: '1',
            category: 'DIGITAL_GOODS',
            unit_amount: {
              currency_code: 'EUR',
              value: this.priceToPayed.toString(),
            },
          }
        ]
      }
    ]
  },
  advanced: {
    commit: 'true'
  },
  style: {
    label: 'paypal',
    layout: 'vertical'
  },
  onApprove: (data, actions) => {
    console.log('onApprove - transaction was approved, but not authorized', data, actions);
    actions.order.get().then(details => {
      console.log('onApprove - you can get full order details inside onApprove: ', details);
    });
  },
  onClientAuthorization: (data) => {
    console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
    this.showSuccess = true;
  },
  onCancel: (data, actions) => {
    console.log('OnCancel', data, actions);
  },
  onError: err => {
    console.log('OnError', err);
  },
  onClick: (data, actions) => {
    console.log('onClick', data, actions);
  },
};
}
}


