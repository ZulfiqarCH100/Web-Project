import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-relatedskills',
  templateUrl: './relatedskills.component.html',
  styleUrls: ['./relatedskills.component.css'],
})
export class RelatedskillsComponent implements OnInit {
  @Input() skills: any;
  constructor() {}

  ngOnInit(): void {}
}
