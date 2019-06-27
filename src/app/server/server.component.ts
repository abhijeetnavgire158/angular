import { Component, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .online {
            color: white
        }
    `]
})

export class ServerComponent {
    @Output() serverCreated = new EventEmitter<{serverName, serverContent}>();
    @ViewChild('serverName', {static: true}) serverName;
    serverId: Number = 10;
    serverStatus: String = 'Offline';
    allowedNewServer: Boolean = false;
    newServerMessage: String = 'No new server is created.';
    // serverName: String = '';
    servers = [];

    getServerStatus() {
        return this.serverStatus;
    }
    constructor() {
        setTimeout(() => {
            this.allowedNewServer = true;
        }, 2000);

        this.serverStatus = (Math.random() > 0.5) ? 'online' : 'offline';
    }

    onCreateServer(serverContent) {
        console.log('created server call');
      this.serverCreated.emit({serverName: this.serverName.nativeElement.value, serverContent: serverContent.value});
    }

    onUpdateServerName(event: Event) {
        this.serverName = (<HTMLInputElement>event.target).value;
    }

    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}