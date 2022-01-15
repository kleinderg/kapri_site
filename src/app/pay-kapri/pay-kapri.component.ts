import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Payment } from './payment.model';

@Component({
  selector: 'app-pay-kapri',
  templateUrl: './pay-kapri.component.html',
  styleUrls: ['./pay-kapri.component.scss']
})
export class PayKapriComponent implements OnInit {

  paymentForm: FormGroup;
  payment: Payment;
  showConfirmation: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.paymentForm = new FormGroup({
      description: new FormControl(this.payment.description),
      amount: new FormControl(this.payment.amount, Validators.required),
      email: new FormControl(this.payment.email,
        [
          Validators.required,
          Validators.email
        ]
      ),
      address: new FormGroup({
        addressLine1: new FormControl(this.payment.address.addressLine1, Validators.required),
        addressLine2: new FormControl(this.payment.address.addressLine2, Validators.required),
        city: new FormControl(this.payment.address.city, Validators.required),
        state: new FormControl(this.payment.address.state),
        postalCode: new FormControl(this.payment.address.postalCode, Validators.required),
        country: new FormControl(this.payment.address.country, Validators.required)
      })
    })
  }

  submitPayment() {
    if (this.paymentForm.invalid) {
      this.markFormGroupTouched(this.paymentForm)
      return;
    }
    this.makePayment()
  }

  makePayment() {
    return;
  }

  /**
    Marks all controls in a form group as touched
    @param formGroup - The form group to touch
  */
    private markFormGroupTouched(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach((control: FormGroup) => { // Not sure if this typing will work
      control.markAsTouched();

      if (control.controls) {
        this.markFormGroupTouched(control);
      }
    });
  }

}
