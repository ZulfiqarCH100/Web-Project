import { Component, OnInit } from '@angular/core';
import * as data from 'src/app/Data/common_data.json';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  footer_data_company: any;
  footer_data_community: any;
  footer_data_teaching: any;
  constructor() {
    console.log(data);
    this.footer_data_company = data.default['company'];
    this.footer_data_community = data.default['community'];
    this.footer_data_teaching = data.default['teaching'];
  }

  ngOnInit(): void {}
}
