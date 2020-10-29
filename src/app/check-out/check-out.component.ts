import { AfterContentInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../core/services/app.service';

@Component({
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent implements OnInit, OnDestroy, AfterContentInit {

  cardPaymentForm: FormGroup;
  minDateValue: Date;

  constructor(private appService: AppService, private router: Router) {
  }

  ngOnInit(): void {
    this.minDateValue = new Date();
    this.initializePayment();
  }

  ngOnDestroy(): void {
  }

  ngAfterContentInit(): void {
    this.initializePayment();
  }

  private initializePayment() {
    this.cardPaymentForm = new FormGroup({
      cardHolderName: new FormControl('', Validators.compose([Validators.required])),
      creditCardNumber: new FormControl('', Validators.compose([Validators.required])),
      expirationDate: new FormControl(null, Validators.compose([Validators.required])),
      securityCode: new FormControl('', Validators.compose([Validators.max(999), Validators.min(100)])),
      amount: new FormControl(0, Validators.compose([Validators.required])),
    });
  }

  completeCheckOut() {
    switch (this.cardPaymentForm.status) {
      case 'VALID':
        this.preprocess();
        break;
      case 'INVALID':
      case 'PENDING':
        this.appService.showAlerts('warn', 'You missed out on some valid information on the cart checkout.');
        break;
      default:
        break;
    }
  }

  private preprocess() {
    this.appService.authorizePayments(this.cardPaymentForm.value).subscribe(
      response => {
        if (response && response.status === 200) {
          this.appService.showAlerts('success', response.mesaage);
          this.cardPaymentForm.reset();
        } else {
          this.appService.showAlerts('error', response.error.message);
        }
      }
    );
  }

  abortPayment() {
    this.cardPaymentForm.reset();
    this.router.navigate(['']);
  }
}
