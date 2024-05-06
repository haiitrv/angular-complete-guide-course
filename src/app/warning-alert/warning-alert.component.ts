import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  // styleUrl: './warning-alert.component.scss'
  styles: [
    `
      div {
        background-color: red;
        color: #fff;
      }
    `,
  ],
})
export class WarningAlertComponent {}
