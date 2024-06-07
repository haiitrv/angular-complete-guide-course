import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { DUMMY_USERS } from './new-sections/dummy-users';

export type TInvestmentInput = {
  initialInvestment: number;
  duration: number;
  expectedReturn: number;
  annualInvestment: number;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  resultsData: {
    year: number;
    interest: number;
    valueEndOfYear: number;
    annualInvestment: number;
    totalInterest: number;
    totalAmountInvest: number;
  }[];
  users = DUMMY_USERS;
  userSelectedID;
  userSelected;

  constructor(private authService: AuthService) {}
  ngOnInit(): void {
    this.authService.autoLogin();
  }

  get selectedUser() {
    return this.users.find((user) => user.id === this.userSelectedID);
  }

  onReceiveID(id: string) {
    this.userSelectedID = id;
    console.log(this.userSelectedID);
    this.userSelected = DUMMY_USERS.find((user) => user.id === id);
    console.log('app', this.userSelected);
  }
}
