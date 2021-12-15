import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  title = 'web-project';
  constructor(private afAuth: AuthService) {}

  ngOnInit(): void {}

  logout() {
    this.afAuth.signOut();
  }
}
