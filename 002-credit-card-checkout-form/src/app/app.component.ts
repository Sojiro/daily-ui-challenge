import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Checkout Form';
  checkoutForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.checkoutForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.maxLength(100),
          Validators.minLength(5)
        ]
      ],
      cardNumber: [
        '',
        [
          Validators.required,
          Validators.maxLength(16),
          Validators.minLength(16)
        ]
      ],
      expirationDay: [
        '',
        [Validators.required, Validators.maxLength(2), Validators.minLength(2)]
      ],
      expirationMonth: [
        '',
        [Validators.required, Validators.maxLength(2), Validators.minLength(2)]
      ],
      cvc: [
        '',
        [Validators.required, Validators.maxLength(3), Validators.minLength(3)]
      ]
    });
  }
}
