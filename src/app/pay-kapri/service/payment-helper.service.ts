declare var require: any;

import { Injectable } from "@angular/core";
import * as uuid from 'uuid';
import * as functions from 'firebase-functions';

// import * as Paymentwall from 'paymentwall';

var Paymentwall = require('paymentwall');

@Injectable({
    providedIn: 'root'
})
export class PaymentHelperService {
    
    constructor() {
        Paymentwall.Configure(Paymentwall.Base.API_GOODS, functions.config().paymentwall.projectkey, functions.config().paymentwall.secretkey)
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
                'failure_url': 'https://kaprihorn.com/pay-kapri/oop',
            }
        )

        // returns widget url, probably for iframe?
        return widget.getUrl();
    }
}