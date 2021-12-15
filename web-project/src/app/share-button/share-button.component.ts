import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-share-button',
  templateUrl: './share-button.component.html',
  styleUrls: ['./share-button.component.css'],
})
export class ShareButtonComponent implements OnInit {
  @Input()
  url: string;
  constructor() {
    this.url = '';
  }

  ngOnInit(): void {}
}
