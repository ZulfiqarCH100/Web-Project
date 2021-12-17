import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedskillsComponent } from './relatedskills.component';

describe('RelatedskillsComponent', () => {
  let component: RelatedskillsComponent;
  let fixture: ComponentFixture<RelatedskillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatedskillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedskillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
