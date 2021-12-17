import { Component, OnInit, Input } from '@angular/core';
import * as data from 'src/app/Data/animation_data.json';

@Component({
  selector: 'app-mainpanel',
  templateUrl: './mainpanel.component.html',
  styleUrls: ['./mainpanel.component.css'],
})
export class MainpanelComponent implements OnInit {
  @Input() skills_data: any;
  constructor() {
    this.skills_data = data.default['related_skills'];
  }

  ngOnInit(): void {}
}
