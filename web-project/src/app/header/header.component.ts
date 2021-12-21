import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import * as data from 'src/app/Data/common_data.json';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  create: any;
  build: any;
  thrive: any;
  constructor(private authService: AuthService) {
    this.create = data.default['Create'];
    this.build = data.default['Build'];
    this.thrive = data.default['Thrive'];
    console.log(this.create);
  }

  ngOnInit(): void {}

  logout() {
    this.authService.signOut();
  }
}
