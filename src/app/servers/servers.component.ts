import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.scss',
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = '';
  userName = '';
  serverCreated = false;
  servers = ['Server 1', 'Server 2'];
  isDisplayedDetails = false;
  logs = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 5000);
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus =
      'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onUpdateUserName(event: Event) {
    this.userName = (<HTMLInputElement>event.target).value;
  }

  onAddUserName() {
    this.userName = '';
  }

  toggleDisplay() {
    this.isDisplayedDetails = !this.isDisplayedDetails;
    this.logs.push(this.logs.length + 1);
  }
}
