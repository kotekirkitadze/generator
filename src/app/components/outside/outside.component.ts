import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-outside',
  templateUrl: './outside.component.html',
  styleUrls: ['./outside.component.scss'],
})
export class OutsideComponent implements OnInit {
  constructor() {}
  isActive = false;
  ngOnInit(): void {}

  test() {
    this.isActive = !this.isActive;
  }
}
