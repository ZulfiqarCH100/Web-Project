import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  @Input() course_item: any;
  constructor() {}

  ngOnInit(): void {}
}
