import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { DUMMY_USERS } from './new-sections/dummy-users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
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
