import { Component, OnInit } from '@angular/core';
import * as data from 'src/app/Data/animation_data.json';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  featured_cards: any;
  popular_cards: any;
  trending_cards: any;
  main_card: any;

  constructor() {
    this.featured_cards = data.default['featured_cards'];
    this.popular_cards = data.default['popular_cards'];
    this.trending_cards = data.default['trending_cards'];
    this.main_card = data.default['main_card'];
  }

  ngOnInit(): void {}
}
