import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Payment } from './payment.model';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-pay-kapri',
  templateUrl: './pay-kapri.component.html',
  styleUrls: ['./pay-kapri.component.scss']
})
export class PayKapriComponent implements OnInit {
  title: string = "Pay Kapri";

  paymentForm: FormGroup;
  payment: Payment;
  showConfirmation: boolean = false;
  beforePayment: boolean = true;

  constructor(
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.metaService.addTags([
      {name: 'keywords', content: 'Furry Artist, Commissions, Art, NSFW Furry Art, Kaprihorn Commissions, Kaprileak Commissions, Kapri Commissions'},
      {name: 'description', content: 'Pricing and terms of service for commissioning Kapri.'},
      {name: 'robots', content: 'noindex'},
      {name: 'image', content: '/assets/img/img_banner.png'}
    ]);

    this.paymentForm = new FormGroup({
      description: new FormControl(this.payment.description),
      amount: new FormControl(this.payment.amount, Validators.required),
      email: new FormControl(this.payment.email,
        [
          Validators.required,
          Validators.email
        ]
      )
    })
  }

  submitPayment() {
    if (this.paymentForm.invalid) {
      this.markFormGroupTouched(this.paymentForm)
      console.log("Payment form invalid.")
      return;
    }
    this.makePayment()
  }

  makePayment() {
    console.log("Payment started.")
    console.log(this.paymentForm.value)
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
