import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { CourseService } from './course.service';

@Component({
  moduleId: module.id,
  selector: 'course-list',
  templateUrl: 'course-list.component.html',
  styleUrls: ['course-list.component.css'],
  providers: [CourseService]
})
export class CourseListComponent implements OnInit {

  courses: any

  constructor(private router: Router, private courseService: CourseService) { }

  ngOnInit() {
    this.courseService.courseList()
      .subscribe(c => this.courses = c)
  }

  click(course) {
    this.router.navigate(['/course', course.id]);
  }
}
