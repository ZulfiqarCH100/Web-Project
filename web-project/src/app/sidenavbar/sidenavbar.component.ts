import { Component, OnInit } from '@angular/core';
import * as data from 'src/app/Data/common_data.json';

@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.css'],
})
export class SidenavbarComponent implements OnInit {
  create: any;
  build: any;
  thrive: any;
  constructor() {
    this.create = data.default['Create'];
    this.build = data.default['Build'];
    this.thrive = data.default['Thrive'];
    console.log(this.create);
  }

  ngOnInit(): void {}
}
