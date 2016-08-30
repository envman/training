import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'course-list',
  templateUrl: 'course-list.component.html',
  styleUrls: ['course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courses: any

  constructor() { }

  ngOnInit() {
    this.courses = [{
      name: 'Dependency Injection.... The route of all evil',
      author: 'James Neal',
      description: `A wild look into how DI works.... or doesn't`
    }]
  }

}
