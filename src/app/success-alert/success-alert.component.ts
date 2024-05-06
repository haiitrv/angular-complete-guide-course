import { Component } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  // styleUrl: './success-alert.component.scss',
  styles: [
    `
      div {
        background-color: green;
        color: #fff;
      }
    `,
  ],
})
export class SuccessAlertComponent {}
