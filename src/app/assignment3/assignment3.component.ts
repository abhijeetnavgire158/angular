import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component implements OnInit {

  displaySecret = false;
  logCounts = [];
  constructor() { }

  ngOnInit() {
  }

  onToggleDetails() {
    this.displaySecret = !this.displaySecret;
    this.logCounts.push(this.logCounts.length + 1);
  }

}
