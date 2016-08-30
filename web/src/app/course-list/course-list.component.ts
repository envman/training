import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  moduleId: module.id,
  selector: 'course-list',
  templateUrl: 'course-list.component.html',
  styleUrls: ['course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courses: any

  constructor(private router: Router) { }

  ngOnInit() {

    let course1 = <any>{
      id: 1,
      name: 'Dependency Injection.... The route of all evil',
      author: 'James Neal',
      description: `A wild look into how DI works.... or doesn't`
    }

    let course2 = <any>{
      id: 2,
      name: 'Dependency Injection.... The route of all evil',
      author: 'James Neal',
      description: `A wild look into how DI works.... or doesn't`
    }

    let course3 = <any>{
      id: 3,
      name: 'Dependency Injection.... The route of all evil',
      author: 'James Neal',
      description: `A wild look into how DI works.... or doesn't`
    }

    let course4 = <any>{
      id: 4,
      name: 'Dependency Injection.... The route of all evil',
      author: 'James Neal',
      description: `A wild look into how DI works.... or doesn't`
    }

    this.courses = [course1, course2, course3, course4]
  }

  click(course) {
    this.router.navigate(['/course', course.id]);
  }

}
