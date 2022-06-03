import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent implements OnInit {
  constructor() {}
  isActive = false;
  ngOnInit(): void {}

  data: any[] = [
    { firstName: 'user1', lastName: 'user1 lastName', id: 1 },
    { firstName: 'use2', lastName: 'user2 lastName', id: 2 },
  ];

  details() {}

  selected: number;
  show(id: number) {
    if (this.selected == id) {
      this.selected = undefined;
      return;
    }
    this.selected = id;
  }
}
