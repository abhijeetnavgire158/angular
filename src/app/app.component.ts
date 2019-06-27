import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers = [
    {name: 'test1', content: 'content'}
  ];

  onCreateServer(serverData: {serverName, serverContent}) {
    console.log('SERVER DATA');
    this.servers.push({name: serverData.serverName, content: serverData.serverContent});
}

}
