import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  registerMode = false;

  constructor() { }

  ngOnInit() {
  }

  // tslint:disable-next-line: typedef
  registerToggle(){
    this.registerMode = !this.registerMode;
  }

}
