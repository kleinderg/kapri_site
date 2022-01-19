declare var require: any

import { Injectable } from "@angular/core"
import * as uuid from 'uuid';
// import { environment } from "src/environments/environment.dev";
import { AngularFireFunctions } from '@angular/fire/compat/functions';
// import * as Paymentwall from 'paymentwall';

var Paymentwall = require('paymentwall');

@Injectable({
    providedIn: 'root'
})
export class PaymentHelperService {

    constructor(
        private fns: AngularFireFunctions
    ) {
        Paymentwall.Configure(Paymentwall.Base.API_GOODS, environment.APPLICATION_KEY, environment.SECRET_KEY) // TODO: Update me plz
    }


    //https://docs.paymentwall.com/apis#section-param-optional
    getWidgetUrl(amount: number, userEmail: string, productName: string) {
        let widget = new Paymentwall.Widget (
            uuid.v4(),
            'pw_1',
            [
                new Paymentwall.Product (
                    productName,
                    amount,
                    'EUR',
                    Paymentwall.Product.TYPE_FIXED,
                )
            ],
            {
                'email': userEmail,
                'history[registration_date]': Math.floor(Date.now() / 1000),
                'ps': 'cc', // set this to all to allow all payment types, https://docs.paymentwall.com/reference/payment-system-shortcodes
                'success_url': 'https://kaprihorn.com/pay-kapri/success',
                'failure_url': 'https://kaprihorn.com/pay-kapri/oop'
            }
        )

        // returns widget url, probably for iframe?
        return widget.getUrl();
    }
}