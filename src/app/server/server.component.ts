import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})

export class ServerComponent {
    serverId: Number = 10;
    serverStatus: String = 'Offline';
    allowedNewServer: Boolean = false;
    newServerMessage: String = 'No new server is created.';
    serverName: String = '';

    getServerStatus() {
        return this.serverStatus;
    }
    constructor() {
        setTimeout(() => {
            this.allowedNewServer = true;
        }, 2000);
    }

    onCreateServer() {
        this.newServerMessage = 'New server was created! With name ' + this.serverName;
    }

    onUpdateServerName(event: Event) {
        this.serverName = (<HTMLInputElement>event.target).value;
    }
}