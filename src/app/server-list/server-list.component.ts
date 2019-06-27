import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.css']
})
export class ServerListComponent implements OnInit {
  @Input('serverEntry') server: {name: string, content: string};
  constructor() { }

  ngOnInit() {
  }

}
