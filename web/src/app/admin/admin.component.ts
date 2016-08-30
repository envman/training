import { Component, OnInit } from '@angular/core'
import { CourseService } from '../course-list/course.service'

@Component({
  moduleId: module.id,
  templateUrl: 'admin.component.html',
  providers: [CourseService]
})
export class AdminComponent {
  constructor(private courseService: CourseService) {}

  name: string = ''
  author: string = ''
  description: string = ''

  addCourse() {
    this.courseService.addCourse(this.name, this.author, this.description)
      .subscribe(r => {
        this.name = ''
        this.author = ''
        this.description = ''
      })
  }
}
