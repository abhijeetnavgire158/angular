import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component implements OnInit {

  userName: String = '';
  clearButtonStatus: Boolean = true;
  constructor() { }

  ngOnInit() {
  }

  // clearText() {
  //   this.userName = '';
  // }
  
}
