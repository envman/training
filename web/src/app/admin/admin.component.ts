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
  xp: number = 0
  time: string = ''
  learn: string = ''

  addCourse() {
    var items = this.learn.split(',')

    this.courseService.addCourse(this.name, this.author, this.description, this.xp, this.time, items)
      .subscribe(r => {
        this.name = ''
        this.author = ''
        this.description = ''
        this.xp = 0
        this.time = ''
        this.learn = ''
      })
  }
}
