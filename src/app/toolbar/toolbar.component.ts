import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'any-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  onHome() {
    console.log('onHome click');
  }

  onLogout() {
    console.log('onLogout click');
  }
}
